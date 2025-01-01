import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Protected content - only visible to authenticated users.</p>
      </CardContent>
    </Card>
  );
}
