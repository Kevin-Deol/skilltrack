import React from "react";
import MyLogo from "../components/logo";
import MyOverview from "../components/overview";
import MyAssignment from "../components/assignment";
import MyReports from "../components/reports";
import MySchedule from "../components/schedule";
import MyMessage from "../components/message";
import MySetting from "../components/settings";
import MySubscriptionCard from "../components/subscriptioncard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Dashboard: React.FC =  async() => {
  const session = await auth();
  if(!session?.user) {
    redirect("/");
  }
  return (
    <div className="App font-custom">
      <div className="flex">
        <div className="flex flex-col h-[1440px] w-[320px] bg-[#F5F7F9]">
          <div className="flex">
            <MyLogo />
          </div>
          <div className="flex flex-col gap-6">
            <MyOverview />
            <MyAssignment />
            <MyReports />
            <MySchedule />
            <MyMessage />
            <MySetting />
          </div>
          <div>
            <MySubscriptionCard />
          </div>
        </div>
        <div className="w-9/12 bg-white">
          <div className="flex justify-between">
            <div>
              <h1>Hello Kevin</h1>
              <p>Let's learn something new</p>
            </div>
            <div>
              <h1 className="inline-block">SearchBar</h1>
              <h1 className="inline-block">SearchBar</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h1>testing</h1>
            </div>
            <div>
              <h1>testing</h1>
            </div>
            <div>
              <h1>testing</h1>
            </div>
          </div>
          <div className="flex">
            <div>
              <h1>Hours Spend</h1>
              <p>chart</p>
            </div>
            <div>
              <h1>Performance</h1>
              <p>gauge</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1>Learning days</h1>
            <div className="flex">
              <h1>box 1</h1>
              <h1>box 1</h1>
              <h1>box 1</h1>
            </div>
          </div>
          <div>
            <h1>Productivy</h1>
          </div>
        </div>
        <div className="w-[343px]">
          <p>Box 3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;