
# Tips and tricks for optimizing documentation for LLMs

AI has significantly changed how developers look for technical information. Search has quietly flipped from “10 blue links” to “one AI answer,” with ChatGPT, Claude, Cursor, Copilot, and Google AI Overviews often sitting between your users and your docs.

For technical writers, DevRel engineers, and anyone who ships technical docs, that adds a new primary audience: large language models. Your documentation now has to be readable, retrievable, and reliably quotable by LLMs, not just humans.

In my experience, for a long time documentation has been a big pain point for a lot of technical teams - often poorly maintained and outdated, rarely having a clear owner, and as a result becoming one of the core bottlenecks in user onboarding. That’s exactly why this AI shift is interesting to me: LLMs are forcing teams to put much more emphasis on the structure, clarity, and value of documentation.

I believe that when you optimize docs for LLMs, you almost always make them clearer and more useful for humans too. In this post, I’m going to share some core practical practices and concrete examples documentation teams should think about today to make the documentation “LLM‑ready.”

## How LLMs actually “read” your docs

Before diving into optimization strategies, it helps to understand how LLMs actually consume documentation. I’ll cover just a few core aspects, but it should be enough to understand the underlying principles and make meaningful improvements.

One important thing to know up front: most models don’t read your documentation page top-to-bottom. In practice, they use a retrieval layer (RAG - Retrieval-Augmented Generation) to pull a handful of relevant snippets (“chunks”) and generate an answer only from that context.

That means structure and clarity directly determine what the model can actually use.

1. **Tokenization**
    
    Text gets broken into small units (“tokens”): words, sub‑words, or chunks of code. For example:
    
    - `auth_token=hmb123` inside a normal sentence might be split into `["auth", "_", "token", "=", "hmb", "123"]`.
    
    Formatting values in backticks or fenced code blocks helps models and retrieval systems recognize them as code-like units, making them easier to extract and reuse correctly.

2. **Chunking**
    
    Retrieval systems group nearby tokens into chunks - usually paragraphs, heading-bounded sections, or sliding windows of a certain size.. Each chunk is treated as the basic unit of “stuff I can return.”
    
    - If you mix permissions and rate limits under one heading, they become one chunk. Ask “How do I update permissions?” and you’ll likely get both permissions + rate limits back.
    - If you split them into separate sections, each becomes its own chunk and can be retrieved independently.

3. **Embeddings & vector retrieval**
    
    Each chunk is turned into a vector that captures its meaning. Queries get turned into vectors and matched against these.
    
    - If two headings are both “Session something,” their embeddings can overlap. “What is the cost per session?” might pull “Session timeout” because the model latches onto “session.”
    - Rename to “Automatic logout timing” vs. “Billing rates,” and the vectors separate; the right chunk wins.

LLMs don’t see your documentation layout. They see structured text, clean chunks, and retrievable context. If your docs aren’t organized for retrieval, they won’t reliably show up in answers.

## Techniques and best practices to make your documentation LLM-ready

There are now a few de-facto patterns for telling AI tools: *“Here’s how to ingest my docs”.* 

### Markdown endpoints (`.md`)

Many modern doc platforms (GitBook, Mintlify, etc.) expose a raw Markdown version of every page:

- `https://docs.example.com/auth` → normal HTML page
- `https://docs.example.com/auth.md` → same content as Markdown

This matters because Markdown is lower noise than HTML. Fewer tags, more predictable structure, cheaper tokens, and easier retrieval.

It also makes your docs instantly usable as context in tools like ChatGPT, Cursor, Claude, or internal copilots.

**Action:** If your stack doesn’t support this by default, consider adding “raw Markdown” or “download as Markdown” endpoint. It’s one of the easiest and effective GEO improvements you can ship.

### `llms.txt`: a curated index for AI tools

`/llms.txt` is a lightweight file at the root of your docs domain that answers questions like:

- What is this product?
- Which pages matter most?
- Where are the clean machine-readable guides?

Think of it as a landing page for retrieval systems. Keep in mind that `llms.txt` should link to core workflows, not your entire sitemap. This is where you sit down and think hard about the most important onboarding paths and developer journeys. Creating `llms.txt` file should also help you audit your documentation for comprehensive guides, terms references, FAQs, API reference.

An example of `llms.txt` file can look as follows:

```jsx
text# Acme Payments API

> REST API for creating payments, managing customers, and handling webhooks.

## Quickstarts
- [Getting started](https://docs.acme.com/getting-started.md)
- [API keys](https://docs.acme.com/authentication.md)

## API Reference
- [OpenAPI spec](https://docs.acme.com/openapi.yaml)
- [REST reference index](https://docs.acme.com/reference.md)

## Webhooks
- [Concepts](https://docs.acme.com/webhooks/concepts.md)
- [Events reference](https://docs.acme.com/webhooks/events.md)

## Meta
- [Changelog](https://docs.acme.com/changelog.md)
```

**Action:** Keep it under version control and update it whenever your information architecture changes.

### `llms-full.txt`: everything in one stream

`/llms-full.txt` is the “one URL to load the whole docs” option. It’s useful for offline embeddings and internal agents. AI tools are increasingly adopting the functionality allowing users to upload the documentation with a single link which then allows them to provide context-aware responses. 

Some documentation platforms like Mintlify generate these files automatically. If your platform doesn’t have this functionality, you can build it by simply concatenating rendered Markdown pages with separators like:

```
#--- PAGE: /auth ---
```

Not every team needs this on day one, but it’s increasingly common.

### MCP: structured access for agents

The Model Context Protocol (MCP) gives AI tools a structured way to access documentation and reference material without relying on HTML scraping or brittle parsing.

You can think of it as the equivalent of an API for your documentation: instead of guessing what content matters, agents can request the right context directly in a predictable format.

For example, GitBook exposes an MCP server at:

- `/~gitbook/mcp`

Most teams won’t need to implement MCP themselves today, but it’s worth knowing whether your documentation platform already supports it. As AI agents become more common in IDEs and internal tooling, structured access layers like MCP will increasingly outperform traditional crawling for accuracy and reliability.

If your platform provides an MCP endpoint, document it alongside your `.md` pages and `llms.txt` as part of your machine-readable entry points.

## Writing docs that retrieve cleanly

In previous section we covered docs ingestion techniques. Now, let’s talk about another very important aspect of making docs LLM-ready - ensuring that LLMs can easily pull the right chunks to answer the questions. There is a number of techniques you should consider

### Use a strict heading hierarchy

Headings aren’t just visual- they’re retrieval boundaries. Having clear headings, that clearly correspond to the information included in a paragraph below is one of the easiest improvements you can make today. If you have multiple concepts under one heading (e.g. “Permissions and Rate Limits”), split them. That makes retrieval more precise and also makes the docs easier for humans scanning the table of contents.

Another tip - focus on keeping the page structure simple and concise. Use one H1 per page and don’t skip the header levels. If you feel like a page needs multiple H1s it’s a good sing that it’s time to split the information into multiple pages to make easier to follow and understand.

### Be explicit: avoid vague and competing definitions

It’s common for docs to describe the same concept differently across pages - especially for core product terms when describing what the product is for. Work with engineering and marketing to define canonical language, then enforce it - avoid alternating between terms to describe the same thing.

Bad:

> To run the app, edit the config file. Next, use the configuration document to set environment variables. Finally, launch the application.
> 

It sounds like “config file” and “configuration document” might be different things.

Good:

> To run the app, edit the config.yaml file. Next, use the config.yaml file to set environment variables. Finally, launch the application.
> 

It’s also recommended to create a concise glossary of core terms with clear definitions. Avoid re-wording those definitions in other written pages. This will make your documentation more precise, focused on providing the technical and “how-to” information, rather than extensive explanations of the meaning behind the terms.

Bonus tip - when writing definitions and instructions, avoid vague pronouns like “it”. Humans can infer the subject from the context, but LLMs find it more difficult since they pull information in chunks. If you have to refer to something, aim to clearly state the subject you are referring to.

### Wrap anything copy-pasteable in code formatting

If you expect users (or AI) to reuse something, mark it clearly. In documentation, this will apply to code snippets and instructions including CLI commands, environment variable definitions, endpoint paths, configurations. Avoid concatenating them with regular text and instead make the more explicit by wrapping them into code formatting. 

For example, Instead of writing the instructions like the following:

> Run pip install pdf2doc and then call pdf2doc --version
> 

Include

```bash
pip install pdf2doc==1.2.3
pdf2doc --version
```

This makes information easier to extract, reuse, and follow for LLMs as well as developers.
Developers focus on getting things done so if you give them details that are easy to find and use, they will use then.

### Don’t rely only on diagrams to provide critical meaning

Diagrams and other visual items are incredible to make complicated concepts easier to understand. The issue is - LLMs don’t see images. If the only explanation of your auth flow lives in a diagram, the model will miss it. Enhance the pages that contain the visuals with structured text summary next to them.

Bad:

`text![Architecture Diagram](architecture.png)
Click to enlarge.`

Good:

`text![Architecture Diagram](architecture.png)
Alt text: Diagram showing a load balancer distributing incoming traffic to two app servers connected to a shared database.

> If you can't view the image, here is a summary:
> A load balancer forwards HTTP requests to App Server A and App Server B. Both servers connect to the same PostgreSQL database.`

Adding text descriptions will not only improve the inforrmation discoverability for LLMs, it will ensure that developers ready your docs easier understand visual details and flows correctly.

## API-heavy docs: where GEO matters most

If your documentation is mostly OpenAPI-generated reference, GEO is especially high leverage - because AI assistants rely heavily on those pages. While API-refernce docs come with in-built structure and copyable examples, make sure you optimize those pages for retrieval. You can do that by updating the API spec with the following: 

- Include `summary` fields
- Provide real `description` text (constraints, side effects)
- Add realistic `requestBody` and `responses` examples: at least one example per key endpoint.

This gives generated docs meaningful text and examples for LLMs to latch onto.

In addition to that, ensure that auth docs follow a retrieval-friendly structure. Avoid adding log paragraphs with mixed instructions. Instead, focus on creating clear flow and corresponding sections:

Bad:

> API AuthEndpoint: To authenticate, send a POST request to /auth with your credentials.Usage: Make this curl call: curl -X POST /auth -d '{"user":"alice","pass":"secret"}'. You will get back a token. Then use the token in the header for other calls.Errors: If you send wrong credentials, you receive an HTTP 401. You can also call /login or /userinfo, but they behave differently.
> 

Good:
```
`text## Authentication

### Endpoint: `POST /auth`
Use this endpoint to retrieve an access token.

### Request

```bash
curl -X POST https://api.example.com/auth \
  -H "Content-Type: application/json" \
  -d '{"username":"alice","password":"secret"}'`

## Successful response

`json{
  "access_token": "a2e-098-rkjlponms",
  "expires_in": 3600
}`

## Error responses

`json{
  "error": "invalid_credentials",
  "message": "Username or password is incorrect"
}`

```

Last but not least, even if 90% of your docs are generated, hand-write a small set of workflow pages. For example these could include:

1. Authenticate and make your first request
2. Handle pagination
3. Set up webhooks and retries
4. Deal with common errors

These pages become the “hero chunks” AI assistants pull from most often - and they should be listed prominently in `llms.txt`.

## Operational practices that keep GEO working

GEO isn’t a one-time rewrite. It’s a maintenance habit.

### Standardize examples across surfaces

Pick a canonical set of workflows (create, list, webhook, error handling) and keep examples consistent across the docs, SDKs, sample apps, code example comments. If examples drift, LLMs will confidently output mismatched code. Reviewing the docs and other platforms for messaging consistency should become part of the general information upkeep.

### Separate deprecated content aggressively

It’s very common for API docs to have various available versions available in the documentation. Don’t mix legacy and current behaviour in the same chunk. Make sure that the documentation reflects that and that there are no mixed versions and methods. For versioning you can use `/v1/` or `/legacy/` subtree. 

If some content is deprecated or severely outdated consider removing it from documentation as it’s not going to help LLMs and is not useful for developers either. If you must keep deprecated versions available on your documentation, make sure to include clear “Deprecated” headings with strong warnings. This prevents retrieval systems from blending old and new instructions.

### Treat docs review as multidisciplinary

We finally have a chance to make documentation sites better, easier to used and understand. When done well, they can significantly improve user onboarding and adoption. Writing and editing docs should never be responsibility on only one team, I believe that teams should treat is a multidisciplinary work. If you own the documentation at your organization, every quarter run a lightweight review with:

- engineering team for correctness and technical precision
- technical writing team for clarity and consistency with core product messaging
- support/solutions team for relevance, practical examples and edge cases

As you work on improvements ask yourself - if this page showed up as a chatbot answer, would it be enough to succeed?

## Final thoughts

LLMs are already sitting between your docs and your users whether in search results, IDEs, or internal copilots. Treating them as first‑class readers forces you to clean up structure, clarify language, and expose machine‑friendly entry points, which in turn makes your documentation better for humans too.

You don’t need a full rewrite to start. Pick one critical workflow, apply the GEO principles, expose `.md` pages and `/llms.txt`, then test it with real AI prompts. If the assistant surfaces the right pages and working examples, keep rolling that pattern across the rest of your docs. If it doesn’t, treat that as a documentation bug, not an AI failure.

The teams that win this transition won’t just “have docs” - they’ll have documentation that any smart agent, human or machine, can navigate, trust, and build on.