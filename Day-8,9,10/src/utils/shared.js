import { Role, RoutePaths } from "./enum";

export const NavigationItems = [
    {
        name: "User",
        route: RoutePaths.User,
        access: [Role.Admin]
    },
    {
        name: "Categories",
        route: RoutePaths.Category,
        access: [Role.Admin]
    },
    {
        name: "Books",
        route: RoutePaths.Book,
        access: [Role.Admin, Role.Seller]
    },
    {
        name: "Update Profile",
        route: RoutePaths.UpdateProfile,
        access: [Role.Admin, Role.Buyer, Role.Seller]
    },
];

export const shared =  {NavigationItems}

