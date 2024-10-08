"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useSWR, { mutate } from "swr";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/Elements/button";
import { Input } from "@/components/ui/Elements/input";
import { Textarea } from "@/components/ui/Elements/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Elements/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/Elements/radio-group";

// Schema for form validation
const FormSchema = z.object({
  firstName: z.string().min(3, {
    message: "First name must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "Last name must be at least 3 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().min(10, {
    message: "Email must be at least 10 characters.",
  }),
  type: z.enum(
    ["webDesign", "appDesign", "blockChain", "graphicDesign", "others"],
    {
      required_error: "You need to select a notification type.",
    }
  ),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
});

// Define a fetcher function
const fetcher = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await fetcher("/api/contact", data);
      form.reset(); 

      if (result) {
        mutate("/api/contact");
        toast({
          title: "Submission successful!",
        });
      
        setLoading(false);
      
      }
    } catch (error) {
      setLoading(false);
      toast({
        title: "Submission failed!",
        description: error.message || "An error occurred.",
        variant: "destructive",
      });
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
                  <Input
                    type="text"
                    placeholder="Enter your Phone Number"
                    {...field}
                  />
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
                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>What service do you need&#63;</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="webDesign" />
                    </FormControl>
                    <FormLabel className="font-normal">Web Design</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="appDesign" />
                    </FormControl>
                    <FormLabel className="font-normal">App Design</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="blockChain" />
                    </FormControl>
                    <FormLabel className="font-normal">Blockchain</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="graphicDesign" />
                    </FormControl>
                    <FormLabel className="font-normal">Graphic Design</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="others" />
                    </FormControl>
                    <FormLabel className="font-normal">Others</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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

export default ContactForm;
