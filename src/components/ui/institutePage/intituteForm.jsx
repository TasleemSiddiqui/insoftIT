"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import { Textarea } from "../Elements/textarea";

// Timing options
const timings = ["10am-12pm", "12pm-3pm", "5pm-7pm"];

// Sample locations
const locations = [
    "Clifton",
    "DHA",
    "Gulshan-e-Iqbal",
    "Gulistan-e-Johar",
    "North Nazimabad",
    "Malir",
    "Korangi",
    "Saddar",
    "PECHS",
    "Shah Faisal Colony",
    "Karimabad",
    "Nazimabad",
    "Federal B Area",
    "Liaquatabad",
    "Orangi Town",
    "Landhi",
    "Surjani Town",
    "Garden East",
    "Garden West",
    "Bahria Town",
    "Scheme 33",
    "Defence View",
    "Manzoor Colony",
    "Mehmoodabad",
    "Kharadar",
    "Lyari",
    "Shershah",
    "Saudabad",
    "Model Colony",
    "Shahrah-e-Faisal",
];

// Sample IT courses
const itCourses = [
  "Web Development",
  "Data Science",
  "Mobile App Development",
  "Cloud Computing",
  "Cybersecurity",
  "Machine Learning",
  "Artificial Intelligence",
  "Blockchain",
  "Game Development",
  "DevOps",
  "UI/UX Design",
];

// Define the Zod schema for the form
const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").max(100, "First Name cannot exceed 100 characters"),
  lastName: z.string().min(1, "Last Name is required").max(100, "Last Name cannot exceed 100 characters"),
  phoneNumber: z.string().min(10, "Phone number should be at least 10 digits").max(15, "Phone number cannot exceed 15 digits").regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(1, "Location is required").max(100, "Location cannot exceed 100 characters"),
  area: z.string().min(1, "Area is required"),
  cnic: z.string().optional(),
  timing: z.string().min(1, "Please select a timing"),
  feedback: z.string().min(1, "Feedback is required"),
  course: z.string().min(1, "Course selection is required"),  // IT Courses field
});

// Define a fetcher function for form submission
const fetcher = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const InstituteForm = () => {
    const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    try {
        setLoading(true);
      const result = await fetcher("/api/instituteService", data); 
      form.reset();

      if (result) {
        mutate("/api/instituteService");
        toast({ title: "Submission successful!" });
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
        <div className="grid md:grid-cols-2 grid-col-1 gap-5">
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
          {/* Area */}
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Area" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* CNIC (Optional) */}
          <FormField
            control={form.control}
            name="cnic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNIC (Optional)</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your CNIC (Optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Timing */}
          <FormField
            control={form.control}
            name="timing"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timing</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timing" />
                    </SelectTrigger>
                    <SelectContent>
                      {timings.map((timing, index) => (
                        <SelectItem key={index} value={timing}>
                          {timing}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* IT Courses */}
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IT Course</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your IT Course" />
                    </SelectTrigger>
                    <SelectContent>
                      {itCourses.map((course, index) => (
                        <SelectItem key={index} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Feedback */}
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback</FormLabel>
                <FormControl>
                  <Textarea type="text" placeholder="Enter your feedback" {...field} />
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

export default InstituteForm;
``
