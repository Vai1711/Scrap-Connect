import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertScrapSubmissionSchema, type InsertScrapSubmission } from "@shared/schema";
import { useSubmitScrap } from "@/hooks/use-scrap";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Leaf, Recycle, MapPin, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ScrapFormProps {
  onSuccess: (data: any) => void;
}

export function ScrapForm({ onSuccess }: ScrapFormProps) {
  const mutation = useSubmitScrap();
  
  const form = useForm<InsertScrapSubmission>({
    resolver: zodResolver(insertScrapSubmissionSchema),
    defaultValues: {
      sellerName: "",
      scrapType: "paper",
      quantity: 0,
      location: "",
    },
  });

  const onSubmit = async (data: InsertScrapSubmission) => {
    const result = await mutation.mutateAsync(data);
    onSuccess(result);
    form.reset();
  };

  return (
    <Card className="w-full border-none shadow-xl shadow-emerald-900/5 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-eco-gradient" />
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Recycle className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Get Pricing</CardTitle>
        </div>
        <CardDescription>
          Enter your scrap details to get an instant AI-generated quote.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            <FormField
              control={form.control}
              name="sellerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-medium">Seller Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g. John Doe" 
                      className="h-12 bg-secondary/30 border-transparent focus:border-primary/50 focus:bg-white transition-all rounded-xl" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="scrapType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 font-medium">Scrap Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-secondary/30 border-transparent focus:border-primary/50 focus:bg-white transition-all rounded-xl">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="paper">Paper & Cardboard</SelectItem>
                        <SelectItem value="plastic">Plastic</SelectItem>
                        <SelectItem value="metal">Metal</SelectItem>
                        <SelectItem value="ewaste">E-Waste</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 font-medium">Quantity (kg)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Scale className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                        <Input 
                          type="number" 
                          placeholder="0" 
                          className="pl-10 h-12 bg-secondary/30 border-transparent focus:border-primary/50 focus:bg-white transition-all rounded-xl" 
                          {...field} 
                          onChange={e => field.onChange(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-medium">Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                      <Input 
                        placeholder="e.g. New York, NY" 
                        className="pl-10 h-12 bg-secondary/30 border-transparent focus:border-primary/50 focus:bg-white transition-all rounded-xl" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-12 text-lg rounded-xl bg-eco-gradient hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  Calculate Price
                  <Leaf className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

