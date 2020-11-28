import{ keyframes } from 'styled-components';

export const rotate = keyframes`
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg)
    opacity: 0;
    
  }

  20% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg)
    
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg)
    opacity: 1;
  }
   60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg)
  }
   80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
  `;
