import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("py-6", className)}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © 2023 SoundSpace. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a className="text-muted-foreground hover:text-foreground" href="#">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 5.16c-.94.42-1.95.7-3 .82 1.08-.64 1.9-1.66 2.3-2.88-1.01.6-2.13 1.03-3.32 1.27-1.95-2.06-5.23-2.15-7.3-.22-1.42 1.3-2.02 3.26-1.58 5.13C5.9 9.1 3.22 7.6 1.56 5.1.34 7.8 1.13 11 3.6 12.58c-.77-.02-1.53-.2-2.2-.5v.05c0 2.75 1.97 5.1 4.7 5.63-.5.14-1 .2-1.53.2-.38 0-.74-.03-1.1-.1.73 2.36 2.85 3.96 5.23 4-1.95 1.5-4.36 2.3-6.86 2.3-.44 0-.88-.03-1.32-.08 2.5 1.6 5.45 2.45 8.42 2.45 10.1 0 15.65-8.37 15.65-15.63 0-.24 0-.48-.02-.72 1.08-.78 2-1.73 2.74-2.83l-.04-.02z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a className="text-muted-foreground hover:text-foreground" href="#">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              <span className="sr-only">Website</span>
            </a>
            <a className="text-muted-foreground hover:text-foreground" href="#">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.09V13.5h-2.67v-2h2.67V8.92c0-2.61 1.67-4.03 4.08-4.03.98 0 1.83.07 2.08.1v2.41h-1.43c-1.12 0-1.33.53-1.33 1.32v1.78h2.68l-.35 2h-2.33v4.59c-2.12-.17-3.93-1.42-4.74-3.09" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a className="text-muted-foreground hover:text-foreground" href="#">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.64 13.58c-.25.55-.77.93-1.36.93-.23 0-.47-.06-.68-.16l-4.13-2.38c-.52-.3-.84-.86-.84-1.46V7.93c0-.64.36-1.23.94-1.52.58-.29 1.28-.23 1.8.15l4.13 2.38c.52.3.84.86.84 1.46v3.21c0 .3-.07.59-.2.85l1.2.69c.5.29.82.84.82 1.45 0 .61-.32 1.16-.82 1.45l-1.2.69c.13.26.2.55.2.85v3.21c0 .6-.32 1.16-.84 1.46l-4.13 2.38c-.21.12-.45.18-.68.18-.59 0-1.11-.38-1.36-.93-.25-.55-.13-1.2.31-1.62l3.62-3.53c.4-.39.62-.92.62-1.47s-.22-1.08-.62-1.47l-3.62-3.53c-.44-.43-.56-1.08-.31-1.62.25-.55.77-.93 1.36-.93.23 0 .47.06.68.16l4.13 2.38c.52.3.84.86.84 1.46v3.21c0 .3-.07.59-.2.85l1.2.69c.5.29.82.84.82 1.45 0 .61-.32 1.16-.82 1.45l-1.2.69z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
