import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Running } from 'lucide-react';

const GRAVITY = 0.6;
const JUMP_FORCE = -10;
const OBSTACLE_SPEED = 5;
const SPAWN_INTERVAL = 2000;

const RunnerGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playerY, setPlayerY] = useState(200);
  const [obstacles, setObstacles] = useState<{ x: number; width: number; height: number }[]>([]);
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const velocityRef = useRef(0);
  const gameLoopRef = useRef<number>();
  const lastSpawnTimeRef = useRef(0);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setPlayerY(200);
    velocityRef.current = 0;
    lastSpawnTimeRef.current = Date.now();
    toast("Game started! Press SPACE to jump!");
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'Space' && !isJumping && !gameOver && gameStarted) {
      setIsJumping(true);
      velocityRef.current = JUMP_FORCE;
    }
    if (e.code === 'Space' && gameOver) {
      startGame();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping, gameOver, gameStarted]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = () => {
      velocityRef.current += GRAVITY;
      setPlayerY(prev => {
        const newY = prev + velocityRef.current;
        if (newY > 200) {
          setIsJumping(false);
          return 200;
        }
        return newY;
      });

      const currentTime = Date.now();
      if (currentTime - lastSpawnTimeRef.current > SPAWN_INTERVAL) {
        setObstacles(prev => [...prev, {
          x: 800,
          width: 20 + Math.random() * 30,
          height: 40 + Math.random() * 60
        }]);
        lastSpawnTimeRef.current = currentTime;
      }

      setObstacles(prev => {
        const newObstacles = prev
          .map(obs => ({ ...obs, x: obs.x - OBSTACLE_SPEED }))
          .filter(obs => obs.x > -50);
        return newObstacles;
      });

      const playerRect = {
        x: 50,
        y: playerY,
        width: 30,
        height: 30
      };

      for (const obstacle of obstacles) {
        if (
          playerRect.x < obstacle.x + obstacle.width &&
          playerRect.x + playerRect.width > obstacle.x &&
          playerRect.y < 200 + obstacle.height &&
          playerRect.y + playerRect.height > 200
        ) {
          setGameOver(true);
          setHighScore(prev => Math.max(prev, score));
          toast("Game Over! Press SPACE to restart!");
          return;
        }
      }

      setScore(prev => prev + 1);

      if (!gameOver) {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
      }
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, obstacles, playerY, score]);

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-semibold mb-2">Runner Game</h3>
        <p className="text-muted-foreground mb-4">Press SPACE to jump over obstacles!</p>
        {!gameStarted && (
          <Button onClick={startGame} className="gap-2">
            <Running className="w-4 h-4" />
            Start Game
          </Button>
        )}
        <div className="flex justify-center gap-8 mt-2">
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>
        </div>
      </div>
      
      <div className="relative w-full h-[300px] border rounded-lg bg-secondary/20 overflow-hidden">
        <motion.div
          className="absolute w-[30px] h-[30px] bg-primary rounded-full"
          style={{
            left: 50,
            top: playerY,
          }}
        />
        
        {obstacles.map((obstacle, index) => (
          <div
            key={index}
            className="absolute bottom-0 bg-destructive"
            style={{
              left: obstacle.x,
              width: obstacle.width,
              height: obstacle.height,
            }}
          />
        ))}
        
        <div className="absolute bottom-0 w-full h-[2px] bg-foreground" />
      </div>
    </div>
  );
};

export default RunnerGame;