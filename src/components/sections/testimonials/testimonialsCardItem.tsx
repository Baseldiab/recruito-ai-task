// lib
import { cn } from "@/lib/utils";

// ui imports
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// types
import { TestimonialsItem } from "@/components/types/testiminials.types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsCardItemProps {
  className?: string;
  item: TestimonialsItem;
}

export default function TestimonialsCardItem({
  className,
  item,
}: TestimonialsCardItemProps) {
  return (
    <Card className={cn("w-full p-4", className)}>
      <CardHeader className="flex flex-row justify-start items-center gap-2">
        <Avatar>
          <AvatarImage src={item.image} />
          <AvatarFallback>{item.name}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className="text-sm text-text-secondary">{item.name}</p>
          <p className="text-sm text-text-third">{item.job}</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-[#E6E8EC33] rounded-xl">
        <p className="text-sm text-text-secondary">{item.description}</p>
      </CardContent>
    </Card>
  );
}
