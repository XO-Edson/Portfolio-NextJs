import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  href?: string;
  className?: string;
  onclick?: () => void;
};

function Button({ children, href, className, onclick }: ButtonType) {
  const renderBtn = () => (
    <button
      onClick={onclick}
      className={`transition-colors hover:text-[#AC6AFF] px-6 border border-blue-100 py-2 rounded-md`}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <a
      onClick={onclick}
      href={href}
      className={`relative inline-flex items-center justify-center h-11 transition-colors hover:text-[#AC6AFF] px-7
`}
    >
      {children}
    </a>
  );

  return href ? renderLink() : renderBtn();
}

export default Button;
