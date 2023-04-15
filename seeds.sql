-- INSERT INTO department (department)
-- VALUES ("Human Resources"),
--     ("Sales"),
--     ("IT"),
--     ("Payroll");

-- INSERT INTO role (pos, salary, department_id)
-- VALUES ("HR Drone", 514.00, 1),
--     ("HR Manager", 651.00, 1),
--     ("Sales Bro", 51648.00, 2),
--     ("Head of Sales", 681681.00, 2),
--     ("IT Person", 53165.00, 3),
--     ("IT Enthusiast", 51651, 3),
--     ("Lord of Money", 6568, 4);

INSERT INTO employee(fname, lname, role_id, manager_id)
VALUES ("Dan", "ghj", 1, 1),
    ("Rachel", "kj", 2, NULL),
    ("Bob", "hjk", 3, 2),
    ("Alex", "gvbhj", 4, NULL),
    ("Michelle", "fvghb", 5, 3),
    ("Juan", "gvbhj", 6, 3),
    ("Nicola", "gvgbhj", 7, NULL),
    ("Robin", "gvyhb", 6, NULL),
    ("Steve", "trfgvh", 2, NULL),
    ("Elvis", "vgbhj", 5, 3);