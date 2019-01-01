export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      title: true,
      name: "Studio",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Billing",
      url: "/theme/colors",
      icon: "icon-drop"
    },
    {
      name: "Function Orders",
      url: "/FunctionOrders/FunctionOrders",
      icon: "icon-pencil"
    },
    {
      name: "Rental Orders",
      url: "/theme/typography",
      icon: "icon-pencil"
    },
    {
      name: "Demonation",
      url: "/theme/typography",
      icon: "icon-pencil"
    },
    {
      title: true,
      name: "App Menu",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Studio",
      url: "",
      icon: "icon-puzzle",
      children: [
        {
          name: "Master",
          url: "/StudioPages/Masters",
          icon: "icon-puzzle"
        },
        {
          name: "Studio Order Details",
          url: "/StudioOrderDetails/StudioOrderDetails",
          icon: "icon-puzzle"
        },
        {
          name: "Purchase",
          url: "/base/carousels",
          icon: "icon-puzzle"
        },
        {
          name: "Stock Reports",
          url: "/base/collapses",
          icon: "icon-puzzle"
        },
        {
          name: "Customers",
          url: "/Customers/Customers",
          icon: "icon-puzzle"
        },
        {
          name: "Studio Bill Reports",
          url: "/StudioBillReport/StudioBillReport",
          icon: "icon-puzzle"
        },
        {
          name: "Productwise Reports",
          url: "/base/jumbotrons",
          icon: "icon-puzzle"
        },
        {
          name: "Expense",
          url: "/Expense/Expense",
          icon: "icon-puzzle"
        },
        {
          name: "Expense Report",
          url: "/ExpenseReport/ExpenseReport",
          icon: "icon-puzzle"
        }
      ]
    },
    {
      name: "Function Orders",
      url: "/base",
      icon: "icon-puzzle",
      children: [
        {
          name: "Order Spending",
          url: "/OrderSpending/OrderSpending",
          icon: "icon-puzzle"
        },
        {
          name: "Order Details",
          url: "/base/cards",
          icon: "icon-puzzle"
        },
        {
          name: "Itemwise Report",
          url: "/base/carousels",
          icon: "icon-puzzle"
        },
        {
          name: "Spending Reports",
          url: "/base/collapses",
          icon: "icon-puzzle"
        }
      ]
    },
    {
      name: "Rental Orders",
      url: "/base",
      icon: "icon-puzzle",
      children: [
        {
          name: "Rental Details",
          url: "/base/breadcrumbs",
          icon: "icon-puzzle"
        },
        {
          name: "Rental Report",
          url: "/base/cards",
          icon: "icon-puzzle"
        },
        {
          name: "Asset Report",
          url: "/base/carousels",
          icon: "icon-puzzle"
        }
      ]
    },
    {
      name: "Admin",
      url: "/base",
      icon: "icon-puzzle",
      children: [
        {
          name: "Denomination",
          url: "/base/breadcrumbs",
          icon: "icon-puzzle"
        },
        {
          name: "Add User",
          url: "/base/cards",
          icon: "icon-puzzle"
        },
        {
          name: "User Role",
          url: "/base/carousels",
          icon: "icon-puzzle"
        },
        {
          name: "Over All Report",
          url: "/base/carousels",
          icon: "icon-puzzle"
        }
      ]
    },
    {
      divider: true
    }
    // {
    //   title: true,
    //   name: "Extras"
    // },
    // {
    //   name: "Pages",
    //   url: "/pages",
    //   icon: "icon-star",
    //   children: [
    //     {
    //       name: "Login",
    //       url: "/login",
    //       icon: "icon-star"
    //     },
    //     {
    //       name: "Register",
    //       url: "/register",
    //       icon: "icon-star"
    //     },
    //     {
    //       name: "Error 404",
    //       url: "/404",
    //       icon: "icon-star"
    //     },
    //     {
    //       name: "Error 500",
    //       url: "/500",
    //       icon: "icon-star"
    //     }
    //   ]
    // },
    // {
    //   name: "Disabled",
    //   url: "/dashboard",
    //   icon: "icon-ban",
    //   attributes: { disabled: true }
    // },
    // {
    //   name: "Download CoreUI",
    //   url: "https://coreui.io/react/",
    //   icon: "icon-cloud-download",
    //   class: "mt-auto",
    //   variant: "success",
    //   attributes: { target: "_blank", rel: "noopener" }
    // },
    // {
    //   name: "Try CoreUI PRO",
    //   url: "https://coreui.io/pro/react/",
    //   icon: "icon-layers",
    //   variant: "danger",
    //   attributes: { target: "_blank", rel: "noopener" }
    // }
  ]
};
