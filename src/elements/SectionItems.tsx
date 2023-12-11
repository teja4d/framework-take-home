interface HeadingProps {
    children: React.ReactNode;
  }
  
  export const Subheading: React.FC<HeadingProps> = ({ children }) => (
    <p className="text-start">
      <small>{children}</small>
    </p>
  );
  
  export const SectionHeading: React.FC <HeadingProps> = ({ children }) => (
    <h1 className="text-3xl lg:text-5xl my-8 text-start w-full lg:w-4/5">
      {children}
    </h1>
  );
  
  export const SectionImage: React.FC<{ src: string; alt: string }> = ({
    src,
    alt,
  }) => <img alt={alt} src={src} className="w-full h-auto" />;
  
  export const SectionContent: React.FC <HeadingProps> = ({ children }) => (
    <div className="mx-0 w-full lg:w-1/2 lg:mx-40">
      {children}
    </div>
  );
  
  export const SectionText: React.FC<HeadingProps> = ({ children }) => (
    <p className="text-start text-gray-700 font-light">{children}</p>
  );