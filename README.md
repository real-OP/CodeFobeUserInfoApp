# 📱 User Information App (React Native)

A simple **React Native app** that fetches and displays **random user data** from an API. Users can navigate through **80 different profiles** using "Previous" and "Next" buttons. 🚀

## 📝 Features
✅ Fetches **80 random users** from the API on app load.  
✅ Displays user **ID, Name, Username, Email, Avatar, and Password**.  
✅ **Previous & Next buttons** for smooth navigation.  
✅ **Error handling** for failed API requests.  
✅ **Loading indicator** while fetching data.  
✅ **Modern UI design** with a clean layout.  
✅ **Status Bar support** for a professional look.  

## 🚀 Technologies Used
- **React Native** (Expo)  
- **Expo Router** (File-based navigation)  
- **Axios** (For API calls)  
- **React Native Paper** (For UI enhancements)  
- **React Native Safe Area Context** (For proper screen layout)  

## 📡 API Used
This app fetches user data from **Random Data API**:  
🔗 [https://random-data-api.com/api/users/random_user?size=80](https://random-data-api.com/api/users/random_user?size=80)  

## 🛠️ Installation & Setup
You can **download the APK** from the **Releases** section of this repository or **clone the repository** and use **EAS Build** to generate the app.  

```sh
# 1️⃣ Clone the Repository
git clone <your-repo-url>
cd UserInfoApp

# 2️⃣ Install Dependencies
npm install

# 3️⃣ Start the App for Development
npx expo start

# 4️⃣ Build the APK using EAS Build
eas build -p android![codefobe](https://github.com/user-attachments/assets/cd5ffc35-0367-413c-8513-d161799a5227)


# If you haven’t set up EAS before, first run:
eas login
eas init

# 5️⃣ Build for iOS (Optional, requires Mac with Xcode)
eas build -p ios


https://github.com/user-attachments/assets/5a36d510-e980-4a8b-a24d-ec8aea83f2f5

