
// Subject Notes Data
const subjectNotes = [
    // CSE 3rd Semester 2021 Scheme
    {
        id: "21CS32",
        title: "Data Structures and Applications",
        credits: 4,
        scheme: "2021",
        semester: "3",
        branch: "CSE",
        syllabus: "path/to/21CS32-syllabus.pdf",
        modelPapers: [
            { year: "2023", url: "path/to/21CS32-2023.pdf" },
            { year: "2022", url: "path/to/21CS32-2022.pdf" }
        ],
        importantNotes: [
            { title: "Quick Reference Guide", url: "path/to/quick-ref.pdf" },
            { title: "Video Lectures", url: "path/to/video-lectures" },
            { title: "Practice Problems", url: "path/to/practice-problems.pdf" }
        ],
        modules: [
            {
                moduleNo: 1,
                title: "Introduction to Data Structures, Arrays and Strings",
                duration: "8 Hours",
                topics: [
                    "Basic Concepts of Data Structures",
                    "Arrays and their Applications",
                    "Strings and String Operations"
                ],
                notesUrl: "path/to/21CS32/module1.pdf",
                downloadUrl: "path/to/21CS32/module1-download.pdf"
            },
            {
                moduleNo: 2,
                title: "Linked Lists",
                duration: "10 Hours",
                topics: [
                    "Singly Linked Lists",
                    "Doubly Linked Lists",
                    "Circular Linked Lists",
                    "Applications"
                ],
                notesUrl: "path/to/21CS32/module2.pdf",
                downloadUrl: "path/to/21CS32/module2-download.pdf"
            },
            {
                moduleNo: 3,
                title: "Stacks and Queues",
                duration: "8 Hours",
                topics: [
                    "Stack Operations and Applications",
                    "Queue Types and Implementations",
                    "Priority Queues"
                ],
                notesUrl: "path/to/21CS32/module3.pdf",
                downloadUrl: "path/to/21CS32/module3-download.pdf"
            },
            {
                moduleNo: 4,
                title: "Trees",
                duration: "10 Hours",
                topics: [
                    "Binary Trees",
                    "Binary Search Trees",
                    "AVL Trees",
                    "Tree Traversals"
                ],
                notesUrl: "path/to/21CS32/module4.pdf",
                downloadUrl: "path/to/21CS32/module4-download.pdf"
            },
            {
                moduleNo: 5,
                title: "Graphs and Hashing",
                duration: "8 Hours",
                topics: [
                    "Graph Representations",
                    "Graph Traversals",
                    "Hashing Techniques",
                    "Collision Resolution"
                ],
                notesUrl: "path/to/21CS32/module5.pdf",
                downloadUrl: "path/to/21CS32/module5-download.pdf"
            }
        ]
    },
    // ISE 3rd Semester 2021 Scheme
    {
        id: "21IS32",
        title: "Information Science and Engineering",
        credits: 4,
        scheme: "2021",
        semester: "3",
        branch: "ISE",
        syllabus: "path/to/21IS32-syllabus.pdf",
        modelPapers: [
            { year: "2023", url: "path/to/21IS32-2023.pdf" },
            { year: "2022", url: "path/to/21IS32-2022.pdf" }
        ],
        importantNotes: [
            { title: "Quick Reference Guide", url: "path/to/is-quick-ref.pdf" },
            { title: "Important Questions", url: "path/to/is-questions.pdf" },
            { title: "Formula Sheet", url: "path/to/is-formulas.pdf" }
        ],
        modules: [
            {
                moduleNo: 1,
                title: "Information Theory Fundamentals",
                duration: "8 Hours",
                topics: [
                    "Information and Entropy",
                    "Source Coding",
                    "Data Compression"
                ],
                notesUrl: "path/to/21IS32/module1.pdf",
                downloadUrl: "path/to/21IS32/module1-download.pdf"
            },
            {
                moduleNo: 2,
                title: "Data Communication",
                duration: "10 Hours",
                topics: [
                    "Communication Models",
                    "Transmission Media",
                    "Digital Communication"
                ],
                notesUrl: "path/to/21IS32/module2.pdf",
                downloadUrl: "path/to/21IS32/module2-download.pdf"
            },
            {
                moduleNo: 3,
                title: "Network Protocols",
                duration: "8 Hours",
                topics: [
                    "TCP/IP Protocol Suite",
                    "Routing Protocols",
                    "Network Security"
                ],
                notesUrl: "path/to/21IS32/module3.pdf",
                downloadUrl: "path/to/21IS32/module3-download.pdf"
            },
            {
                moduleNo: 4,
                title: "Database Systems",
                duration: "10 Hours",
                topics: [
                    "Database Design",
                    "SQL Fundamentals",
                    "Transaction Management"
                ],
                notesUrl: "path/to/21IS32/module4.pdf",
                downloadUrl: "path/to/21IS32/module4-download.pdf"
            },
            {
                moduleNo: 5,
                title: "Information Security",
                duration: "8 Hours",
                topics: [
                    "Cryptography",
                    "Network Security",
                    "Security Protocols"
                ],
                notesUrl: "path/to/21IS32/module5.pdf",
                downloadUrl: "path/to/21IS32/module5-download.pdf"
            }
        ]
    },
    // Mechanical Engineering Subjects
    {
        id: "21ME32",
        title: "Engineering Mechanics",
        credits: 4,
        scheme: "2021",
        semester: "3",
        branch: "MECH",
        syllabus: "path/to/21ME32-syllabus.pdf",
        modelPapers: [
            { year: "2023", url: "path/to/21ME32-2023.pdf" },
            { year: "2022", url: "path/to/21ME32-2022.pdf" }
        ],
        importantNotes: [
            { title: "Statics Formula Sheet", url: "path/to/statics-formulas.pdf" },
            { title: "Important Problems", url: "path/to/mech-problems.pdf" },
            { title: "Quick Reference", url: "path/to/mech-ref.pdf" }
        ],
        modules: [
            {
                moduleNo: 1,
                title: "Basic Concepts of Mechanics",
                duration: "8 Hours",
                topics: [
                    "Force Systems",
                    "Equilibrium",
                    "Free Body Diagrams"
                ],
                notesUrl: "path/to/21ME32/module1.pdf",
                downloadUrl: "path/to/21ME32/module1-download.pdf"
            },
            {
                moduleNo: 2,
                title: "Friction and Applications",
                duration: "10 Hours",
                topics: [
                    "Laws of Friction",
                    "Applications in Machines",
                    "Belt Friction"
                ],
                notesUrl: "path/to/21ME32/module2.pdf",
                downloadUrl: "path/to/21ME32/module2-download.pdf"
            }
        ]
    },
    // Civil Engineering Subjects
    {
        id: "21CV32",
        title: "Structural Analysis",
        credits: 4,
        scheme: "2021",
        semester: "3",
        branch: "CIVIL",
        syllabus: "path/to/21CV32-syllabus.pdf",
        modelPapers: [
            { year: "2023", url: "path/to/21CV32-2023.pdf" },
            { year: "2022", url: "path/to/21CV32-2022.pdf" }
        ],
        importantNotes: [
            { title: "Design Tables", url: "path/to/design-tables.pdf" },
            { title: "Structural Formulas", url: "path/to/struct-formulas.pdf" },
            { title: "Practice Problems", url: "path/to/civil-problems.pdf" }
        ],
        modules: [
            {
                moduleNo: 1,
                title: "Analysis of Determinate Structures",
                duration: "10 Hours",
                topics: [
                    "Beams and Types",
                    "Shear Force and Bending Moment",
                    "Influence Lines"
                ],
                notesUrl: "path/to/21CV32/module1.pdf",
                downloadUrl: "path/to/21CV32/module1-download.pdf"
            },
            {
                moduleNo: 2,
                title: "Analysis of Trusses",
                duration: "8 Hours",
                topics: [
                    "Method of Joints",
                    "Method of Sections",
                    "Deflection of Trusses"
                ],
                notesUrl: "path/to/21CV32/module2.pdf",
                downloadUrl: "path/to/21CV32/module2-download.pdf"
            }
        ]
    },
    // Electrical Engineering Subjects
    {
        id: "21EE32",
        title: "Electric Circuit Analysis",
        credits: 4,
        scheme: "2021",
        semester: "3",
        branch: "EEE",
        syllabus: "path/to/21EE32-syllabus.pdf",
        modelPapers: [
            { year: "2023", url: "path/to/21EE32-2023.pdf" },
            { year: "2022", url: "path/to/21EE32-2022.pdf" }
        ],
        importantNotes: [
            { title: "Circuit Laws Reference", url: "path/to/circuit-laws.pdf" },
            { title: "Network Theorems", url: "path/to/network-theorems.pdf" },
            { title: "Solved Examples", url: "path/to/ee-examples.pdf" }
        ],
        modules: [
            {
                moduleNo: 1,
                title: "Circuit Fundamentals",
                duration: "8 Hours",
                topics: [
                    "Kirchhoff's Laws",
                    "Mesh Analysis",
                    "Nodal Analysis"
                ],
                notesUrl: "path/to/21EE32/module1.pdf",
                downloadUrl: "path/to/21EE32/module1-download.pdf"
            },
            {
                moduleNo: 2,
                title: "Network Theorems",
                duration: "10 Hours",
                topics: [
                    "Thevenin's Theorem",
                    "Norton's Theorem",
                    "Maximum Power Transfer"
                ],
                notesUrl: "path/to/21EE32/module2.pdf",
                downloadUrl: "path/to/21EE32/module2-download.pdf"
            }
        ]
    },
    // Additional Computer Science Subject
    {
        id: "21CS33",
        title: "Object Oriented Programming",
        credits: 4,
        scheme: "2021",
        semester: "3",
        branch: "CSE",
        syllabus: "path/to/21CS33-syllabus.pdf",
        modelPapers: [
            { year: "2023", url: "path/to/21CS33-2023.pdf" },
            { year: "2022", url: "path/to/21CS33-2022.pdf" }
        ],
        importantNotes: [
            { title: "OOP Concepts", url: "path/to/oop-concepts.pdf" },
            { title: "Java Programming Guide", url: "path/to/java-guide.pdf" },
            { title: "Design Patterns", url: "path/to/design-patterns.pdf" }
        ],
        modules: [
            {
                moduleNo: 1,
                title: "Introduction to OOP",
                duration: "8 Hours",
                topics: [
                    "Classes and Objects",
                    "Inheritance",
                    "Polymorphism"
                ],
                notesUrl: "path/to/21CS33/module1.pdf",
                downloadUrl: "path/to/21CS33/module1-download.pdf"
            },
            {
                moduleNo: 2,
                title: "Exception Handling and Packages",
                duration: "10 Hours",
                topics: [
                    "Try-Catch Blocks",
                    "Custom Exceptions",
                    "Package Creation"
                ],
                notesUrl: "path/to/21CS33/module2.pdf",
                downloadUrl: "path/to/21CS33/module2-download.pdf"
            }
        ]
    }
];