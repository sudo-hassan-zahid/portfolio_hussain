

interface SectionSkeletonProps {
  type?: "cards" | "list" | "cta" | "footer";
}

export default function SectionSkeleton({
  type = "cards",
}: SectionSkeletonProps) {
  if (type === "cta") {
    return (
      <div className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="animate-pulse h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mx-auto w-3/4" />
          <div className="animate-pulse h-6 bg-gradient-to-r from-primary/15 to-accent/15 rounded-lg mx-auto w-2/3 delay-75" />
          <div className="animate-pulse h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mx-auto w-48 delay-150" />
        </div>
      </div>
    );
  }

  if (type === "footer") {
    return (
      <div className="py-12 bg-card/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse h-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg" />
        </div>
      </div>
    );
  }

  if (type === "list") {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-pulse h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-12 w-1/3 mx-auto" />
          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="animate-pulse h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-12 w-1/3 mx-auto" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="animate-pulse h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
