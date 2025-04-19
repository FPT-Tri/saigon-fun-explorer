
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useDatabase } from "../context/DatabaseContext";

const formSchema = z.object({
  name: z.string().min(1, "Tên địa điểm không được để trống"),
  address: z.string().min(1, "Địa chỉ không được để trống"),
  phone: z.string().optional(),
  image: z.string().url("URL hình ảnh không hợp lệ"),
  activityId: z.string().optional(),
  districtId: z.string().optional(),
  foodId: z.string().optional(),
  description: z.string().optional(),
});

interface AddLocationDialogProps {
  type: "activity" | "food";
}

export function AddLocationDialog({ type }: AddLocationDialogProps) {
  const { activities, districts, foods } = useDatabase();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      image: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, this would call an API to save the data
    toast({
      title: "Thông báo",
      description: "Chức năng này sẽ được kích hoạt sau khi tích hợp với backend.",
    });
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Thêm địa điểm mới
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thêm địa điểm mới</DialogTitle>
          <DialogDescription>
            Thêm một địa điểm {type === "activity" ? "hoạt động" : "ẩm thực"} mới vào hệ thống
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên địa điểm</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tên địa điểm" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {type === "activity" ? (
              <FormField
                control={form.control}
                name="activityId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loại hoạt động</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại hoạt động" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {activities.map((activity) => (
                          <SelectItem key={activity.id} value={activity.id.toString()}>
                            {activity.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <>
                <FormField
                  control={form.control}
                  name="districtId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quận</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn quận" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district.id} value={district.id.toString()}>
                              {district.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="foodId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Món ăn</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn món ăn" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {foods.map((food) => (
                            <SelectItem key={food.id} value={food.id.toString()}>
                              {food.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập địa chỉ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập số điện thoại" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL hình ảnh</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập URL hình ảnh" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập mô tả" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Thêm địa điểm</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
