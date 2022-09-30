export const name = [(v) => !!v || "Name is required"];
export const email = [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+/.test(v) || "E-mail must be valid",
];
export const password = [
    (v) => !!v || "Password is required",
    (v) =>
        v.length >= 8 ||
        "Password must be equal or more than 8 characters",
];
