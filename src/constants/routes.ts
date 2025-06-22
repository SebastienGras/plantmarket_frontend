export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCTS: "/products",
  PRODUCT: "/products/:id",
};

export const AUTHENTICATED_ROUTES = {
  PROFILE: "/profile",
  CART: "/cart",
  ORDERS: "/orders",
  ADD_PRODUCT: "/products/add",
  USER_PRODUCTS: "/products/user/:userId",
  LOGOUT: "/logout",
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ROUTES_WITH_PARAMS = (params: Record<string, string>) => ({
  PRODUCT: `/products/${params["id"]}`,
  EDIT_PRODUCT: `/products/${params["id"]}/edit`,
  USER_PRODUCTS: `/products/user/${params["userId"]}`,
});

export const ALL_ROUTES = {
  ...PUBLIC_ROUTES,
  ...AUTHENTICATED_ROUTES,
};
