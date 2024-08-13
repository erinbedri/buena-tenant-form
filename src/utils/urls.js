const PATHS = {
    HOME: "/",
    NAME: "/name",
    EMAIL: "/email",
    PHONE: "/phone",
    SALARY: "/salary",
    SUMMARY: "/summary",
};

const STEPS = [
    { name: "Name Info", path: PATHS.NAME },
    { name: "Email Info", path: PATHS.EMAIL },
    { name: "Phone Info", path: PATHS.PHONE },
    { name: "Salary Info", path: PATHS.SALARY },
    { name: "Summary", path: PATHS.SUMMARY },
];

export { PATHS, STEPS };
