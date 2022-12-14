const routes = [
  {
    path: "/",
    component: () => import("layouts/loginLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "thankYou",
        component: () => import("pages/thankyou/thankYou.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
