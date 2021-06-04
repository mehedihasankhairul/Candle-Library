import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const userData = [
  {
    uData: "demo@gmail.com",
    icon: "icons.location_icon",
  },
  {
    uData: "Dhaka, Bangladesh",
    icon: "email_icon",
  },
  {
    uData: "+880123456789",
    icon: "phone_icon",
  },
];

const Setting = () => {
  const profileData = {
    name: "Jack Smith",
    point: 150,
  };
  const [profile, setProfile] = React.useState(profileData);

  function userProfile() {
    return (
      <View
        style={{
          flex: 1,
          padding: 5,
          alignItems: "center",
          backgroundColor: COLORS.secondary,
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: 150,
          }}
        >
          <Image
            source={images.userAvatar}
            resizeMode="contain"
            style={{
              marginTop: 15,
              width: 120,
              height: 120,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 60,
              paddingLeft: SIZES.radius,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            ...FONTS.h2,
            color: COLORS.white,
            Color: "black",
            paddingLeft: 3,
            paddingRight: 3,
            textAlign: "center",
          }}
        >
          {profile.name}
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            color: "white",
            textAlign: "center",
          }}
        >
          Dhaka, Bangladesh
        </Text>

        {/* order */}

        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            width: 400,
          }}
        >
          {/* order */}
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("order")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.cart_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ ...FONTS.h4, color: "black", paddingLeft: 5 }}>
                Cart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("order")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.edit_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ ...FONTS.h4, color: "black", paddingLeft: 5 }}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
            }}
            onPress={() => console.log("order")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.order_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text style={{ ...FONTS.h4, color: "black", paddingLeft: 5 }}>
                Order's
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Address */}

        <View
          style={{
            marginTop: 20,
            height: 200,
            width: 400,
            backgroundColor: "white",
            borderRadius: 20,
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              padding: 10,
              margin: 20,
            }}
          >
            {userData.map((data) => (
              <View
                style={{
                  width: 300,
                  height: 50,
                  // backgroundColor: "#4bcffa",
                  borderStartWidth: 2,
                  borderColor: "#4bcffa",
                  flex: 1,
                  alignItems: "center",
                  borderRadius: 10,
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    margin: 5,
                    padding: 5,
                    ...FONTS.h3,
                  }}
                >
                  {data.uData}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }

  return userProfile();
};
export default Setting;
