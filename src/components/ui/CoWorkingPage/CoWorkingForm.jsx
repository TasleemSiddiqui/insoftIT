"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useSWR, { mutate } from "swr";
import { toast } from "@/hooks/use-toast"; 
import { Button } from "@/components/ui/Elements/button";
import { Input } from "@/components/ui/Elements/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Elements/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Elements/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/Elements/radio-group";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/Elements/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Elements/popover";
import { useState } from "react";

// Sample locations
const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose"
];

// Define the Zod schema for the form
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").max(100, "First Name cannot exceed 100 characters"),
  lastName: z.string().min(1, "Last Name is required").max(100, "Last Name cannot exceed 100 characters"),
  phoneNumber: z.string().min(10, "Phone number should be at least 10 digits").max(15, "Phone number cannot exceed 15 digits").regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(1, "Location is required").max(100, "Location cannot exceed 100 characters"),
  numOfPeople: z.string().min(1, "There should be at least 1 person").max(1000, "Number of people cannot exceed 1000"),
  shift: z.enum(["day", "night"], "Please select a valid shift option"),
  ac: z.enum(["ac", "nonAc"], "Please select either AC or Non-AC option"),
  startTime: z.date({ required_error: "Start time is required" }).refine((date) => date >= new Date(), "Start time must be in the future"),
  endTime: z.date({ required_error: "End time is required" }).refine((date) => date >= new Date(), "End time must be in the future"),
  budget: z.string().min(1, "Budget must be at least 1").max(1000000, "Budget cannot exceed 1 million"),
});

// Define a fetcher function for form submission
const fetcher = (url, data) => 
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const CoWorkingForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await fetcher("/api/coworking", data); // replace with your actual API endpoint
      form.reset();

      if (result) {
        mutate("/api/coworking"); // Optional: mutate cache if using SWR
        toast({
          title: "Submission successful!",
        });
      }
    } catch (error) {
      toast({
        title: "Submission failed!",
        description: error.message || "An error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-col-1 gap-5 ">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location, index) => (
                        <SelectItem key={index} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Number of People */}
          <FormField
            control={form.control}
            name="numOfPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of People</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter number of people" {...field} min={1} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Shift */}
          <FormField
            control={form.control}
            name="shift"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shift</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="day" />
                      </FormControl>
                      <FormLabel className="font-normal">Day</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="night" />
                      </FormControl>
                      <FormLabel className="font-normal">Night</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* AC */}
          <FormField
            control={form.control}
            name="ac"
            render={({ field }) => (
              <FormItem>
                <FormLabel>AC</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ac" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="nonAc" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Start Time */}
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? field.value.toLocaleString() : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End Time */}
          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? field.value.toLocaleString() : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Budget */}
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter your budget" {...field} min={1} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mt-5" disabled={loading}>
          {loading ? (
            <span className="flex items-center justify-center">
              <span className="loader"></span> {/* Add your spinner here */}
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CoWorkingForm;
