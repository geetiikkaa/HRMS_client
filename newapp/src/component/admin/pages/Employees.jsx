import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react";

export default function Employees() {
  let [empData, setEmpData] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;

    setEmpData({ ...empData, [name]: value });
  };

  console.log(empData);
  return (
    <div>
      <Dialog>
        <div className="text-right">
          <DialogContent className="h-150 scroll-smooth overflow-scroll">
            <DialogHeader>
              <DialogTitle>Employee Form</DialogTitle>
              <DialogDescription>
                <div className="">
                  <label className="font-bold text-black">Emp id</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="text"
                    placeholder="Enter the Employee ID"
                    name="id"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Name</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="text"
                    placeholder="Enter the Employee Name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Email</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="email"
                    placeholder="Enter the Employee Email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Phone no.</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="number"
                    placeholder="Enter the Employee phone no."
                    name="phone no"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Address</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="text"
                    placeholder="Enter the Employee Address"
                    name="address"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Date Of Birth</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="date"
                    placeholder="Enter the Employee D.O.B"
                    name="D.O.B"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Joining Date</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="date"
                    placeholder="Enter the Employee Joining Date"
                    name="joining date"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Department</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="text"
                    placeholder="Enter the Employee Department"
                    name="department"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="font-bold text-black">Emp Designation</label>
                </div>
                <div className="mb-5">
                  <input
                    className="w-full h-8 border-2 border-black rounded"
                    type="text"
                    placeholder="Enter the Employee Designation"
                    name="designation"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button className="h-10 w-25 border-2 border-red-600 rounded-3xl text-white bg-red-600 m-3">Close</button>
                  <button className="h-10 w-25 border-2 border-green-600 rounded-3xl text-white bg-green-600 m-3"> Submit</button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>
              <DialogTrigger className="h-10 w-50 border-2 text-white bg-blue-50 rounded bg-blue-600 rounded-2xl">Add Employee</DialogTrigger>

            </CardAction>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Emp id</TableHead>
                  <TableHead>Emp Name</TableHead>
                  <TableHead>Emp Email</TableHead>
                  <TableHead>Emp Phone no.</TableHead>
                  <TableHead>Emp Address</TableHead>
                  <TableHead>Emp  D.O.B</TableHead>
                  <TableHead>Emp D.O.J</TableHead>
                  <TableHead>Emp Department</TableHead> 
                  <TableHead>Emp Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{empData.id}</TableCell>
                  <TableCell>{empData.name}</TableCell>
                  <TableCell>{empData.email}</TableCell>
                  <TableCell>{empData.phone}</TableCell>
                  <TableCell>{empData.address}</TableCell>
                  <TableCell>{empData.dob}</TableCell>
                  <TableCell>{empData.doj}</TableCell>
                  <TableCell>{empData.department}</TableCell>
                  <TableCell>{empData.designation}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}