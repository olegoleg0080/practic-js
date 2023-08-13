const users = [
    { name: "fred", likes: "20" },
    { name: "bobby", likes: "3" },
    { name: "fred", likes: "10" },
    { name: "alice", likes: "8" },
    { name: "jane", likes: "5" },
];
_.sortBy(users, function (item) {
    return item.likes;
});
console.log(users);