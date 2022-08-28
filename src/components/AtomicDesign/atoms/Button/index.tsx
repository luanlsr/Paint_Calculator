import './style.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {title}
    </button>
  );
};
