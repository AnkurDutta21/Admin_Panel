import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import {
  AddProducts,
  AllJobs,
  CreateJob,
  Dashboard,
  DashboardAnalytics,
  GetWorkshopEnquiries,
  JobDetails,
  LogIn,
  ProductTable,
  Register,
  TaskDetails,
  TaskManagerDashboard,
  Tasks,
  UserCalender,
  UserProfile,
  Users,
  ViewApplications,
  ViewProduct,
  ViewUser,
  Welcome,
} from "./pages/index";
import TaskStatistics from "./pages/TasksStaistics";
import ProtectedRoutes from "./utils/ProtectedRoutes";
const routes = [
  { path: "/", component: <Welcome />, exact: true },
  { path: "/dashboard", component: <Dashboard />, exact: true },

  { path: "/sign-in", component: <LogIn />, exact: true },
  { path: "/sign-up", component: <Register />, exact: true },
  {
    path: "/users",
    component: (
      <MainLayout>
        <Users />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/taskDashboard",
    component: (
      <MainLayout>
        <TaskManagerDashboard />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/tasks",
    component: (
      <MainLayout>
        <Tasks />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/UserProfile",
    component: (
      <MainLayout>
        <UserProfile />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/taskStatistics",
    component: (
      <MainLayout>
        <TaskStatistics />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/calender",
    component: (
      <MainLayout>
        <UserCalender />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/taskDetails/:taskId",
    component: (
      <MainLayout>
        <TaskDetails />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/task/:taskId",
    component: (
      <MainLayout>
        <TaskDetails />
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/add-products",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <AddProducts />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/product-table",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <ProductTable />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/products/:productId",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <ViewProduct />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/all-jobs",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <AllJobs />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/hiring-form",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <CreateJob />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/view-applications",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <ViewApplications />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/job-details/:jobId",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <JobDetails />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/dashboard-analytics",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <DashboardAnalytics />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/workshop-enquiries",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <GetWorkshopEnquiries />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
  {
    path: "/user/:userId",
    component: (
      <MainLayout>
        <ProtectedRoutes>
          <ViewUser />
        </ProtectedRoutes>
      </MainLayout>
    ),
    exact: true,
  },
];

const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </RouterRoutes>
  );
};

export default Routes;
