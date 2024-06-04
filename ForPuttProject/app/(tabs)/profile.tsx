import { View, Text } from "react-native";
import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Trevor Anderson",
      email: "trev.and03@gmail.com",
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// const Profile = () => {
//   return (
//     <View>
//       <Text>profile</Text>
//     </View>
//   );
// };

// export default Profile;
