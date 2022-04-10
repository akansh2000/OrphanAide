import { writeOrphanageData } from "./Firebase";

function update() {
  //can use this to generate random ambulances, places ambulances at three locations, completely customisable
  let orphanage_data = {
    // around user location
    name: 0,
    address: "Beta-1,Greater Noida",
    state: "Greater Noida",
    number_of_children: 2,
    images: "",
    contact: 0,
    current_condition: "aiims",
    founded: "icon_ptv",
    founder: 27.0,
  };

  let contact = ["8879662915", "9933250397","9000092181", "8592281075","9402201964", "3602350884","3612305758", 
  "9707775071","7542897787", "9546971737","9517571111", "1722772359","9300856314", "7752250175","1123272084", 
  "1124375483","7743999226", "8322312152","2652413529", "9925382336","1244089701", 
  "1294086666","9805236409", "8091030875","9419952004", "1143239200","7091487321", "9472162409",
  "9448164099", "9901397897","4872374754", 
  "4872425334","7312548483", "9425053805","8451948077", "9545057208","3892361143", "9436000868", 
  "3862231830","7066370616", "9337160036","9944634116", "4132214008","9988552211", 
  "9872120664","7442460083", "8741989847","4424913226", "4426864607","9396601234", 
  "9346005469","7005277811", "9862851690","9717432007", "9873961111","1352629367", 
  "8439818425","9832675576", "9932671081"];

  let number_of_children = ["108", "120","64", "78","120", "111","44", "33","40", "85","75", "123","25",
   "45","42", "10","144", "50","68", "88","79", "42","75", "75","33", "36","35", "122","158", 
   "11","156", "44","46", "35","65", "67","76", "45","35", "85","76", "21","24", "65","74", 
   "12","76", "74","95", "25","35", "45","42", "36","34", "78","88", "53","62"];

  let name = ["Children's Orphanage", "Love Children's Home","Asraya Oldage Home & Orphanage Home", 
  "WINGS India Foundation", "Jhamtse Gatsal Children's Community", "Oju Mission School","Sneha Bandhan Children Home", 
  "Naba Prabhat Orphanage","Shree Madhyanand Anathalay", "Safeenah Rainbow Home",
  "Kartar Aasra", "Bal Niketan Society Secy","Sevabharti Matrichaya", "Sewa Bharti Matruchhaya",
  "Arya Orphanage", "Mother teresas home","Aasra Muslim Child Orphanage", "Matruchhaya Orphanage", "Bal Gokulam Children Home","Vatsalyapuram orphanage", "Deepashram",
  "Arya Kanya Sadan", "Titeli - Home for Children","Human Hope Foundation","J&K Orphanage", "SOS Children's Village Jammu",
  "Aanchal Shishu Ashram", 
  "Orphanage Homes-Child Concern", "Sneha Jyothi Orphan Children's Home", "Home of Faith Charitable trust","Thanal VMV Orphanage", 
  "Rehoboth Girls Orphanage","Sewa Bharti Malwa", "Bahuuddeshiya Seva Samiti",
  "Our Lady's Home", "Sunrise Happy Children Home","Hermon Children Home", "Kohima Orphanage and Destitute Home",
  "Prodigals' Home", "Adruta Children's Home","Asha Kiran Home", "Rainbow Foundation Trust", 
  "Sr. ANDREA Gispert","Mata Gujari Ji Orphanage Home", "Unique Home",
  "Mother Teresa Home", "Bhiwadi Oldage Home", "Avvai Home & Orphanage","Balagurukulam Orphanage", "Bass Orphan Home",
  "Aadarana Home", "Nilajoyti Seba Asram","Naba Prantik Child House", "Mala Smriti Home", 
  "Aathmika Foundation","Shri Shradhanand Bal Vanita Ashram", "Apne Sapne Welfare Society",
  "Siliguri Bhawna Society (Orphanage Home)", "Antyodoy Anath Ashram"];

  let address = ["Great Andaman Trunk Rd, Ferrargunj", "Indra Nagar","JH74+5WV, Katiganikalva", 
  "Railway Station Road, Clough Pet, Railpeta, East Kammapalem, Ongole", "Cona, Tawang", 
  "OWA, near police station, B Sector, Naharlagun",
  "Tripura Rd, Jaya Nagar, Khanapara, Guwahati", "Ketekibari Rd, Ketekibari, Tezpur", 
  "Main Road In Campus OF DAV Inter School Danapur, Imlital, Patna", 
  "Mirdahatoli, Pitambra Mandir, Govt. Mid. School, Shershah Rd, Gulzarbagh, Patna",
  "Kartar Aasra Road, Rock Garden of Chandigarh, Sector 1", "Sector 15",
  "Back side of Stadium, Unnamed Road, Kota, Raipur", 
  " Near Tulja Bhawani Mandir, Opposite Home Guard Office, Kududand, Bilaspur",
  "Building No, 1488, Pataudi House, near Astha Nursing Home, Kalan Mahal, Daryaganj", 
  "Mathura Rd, Jangpura Rd, Block C, Bhogal",
  "403716, Pulvaddo, Benaulim", "Shri Shantadurga Prasad, Dhavali, Ponda","1, Arya Kanya Rd, Karelibagh, Vadodara", 
  "Govind ji park back Side Shivalik flats, opposite umra gam, athwa Line, Surat",
  "House No.34, Lt Atul Kataria Marg, RAJIV NAGAR Ward 5, Block No, 44, Gurugram", "461 A, Sector 15, Faridabad",
  "Link Road from Phared (Mandi Pathankot Road) to Bindraban (Palampur Dharamshala Road), Mandi - Pathankot Rd, Samula Khas", 
  "C-36, Ln No.1, Sector 4, Sector 2, New Shimla, Shimla","NH 1A, Chhatabal, Srinagar", "Camp Road","Aghor Path, Purani Ranchi, Bhumiartoli, Ranchi", 
  "Mahaveer Temple, Shivganga Rd, Katoria, Deoghar", "VIT college Road, Thagachaguppe Village, Kumbalagudu, P.O. Kengeri Hobli, Thagachaguppe, Bengaluru", 
  "#93, opp to SABC Bible college, Maruthi Meadows, 1st Main Rd, Kothanur, Bengaluru",
  "225, Kalathode, Ollukkara P.O, Krishnapuram Village,, Thrissur", "Veembu Road, Nellikunnu, Thrissur", 
  "Sewa Bharti, 34,Tilak Path, (Behind Nagpur Nagarik Sahakari Bank Limited Rambagh)", 
  "53/1-2 Kundan Nagar Hawa Banglow, CAT Rd, Near Haridham Mandir, Indore",
  "205, Dr Baba Saheb Ambedkar Rd, Dadar East, Mumbai", "47M5+9R8, Chamtoli",
  "QP7P+J5F, Aizawl", 
  "NH 39",
  "H.No.: 102, Fellowship Colony, Dimapur", 
  " Head Office: At-Gadakana, Po-Mancheswar (RS), Bhubaneswar-751 017, Mancheswar, Bhubaneswar",
  "Bachhara, Jatni", "7, Ranganathan St, Nethaji Nagar 2, Uppalam","25, 1st Cross St, behind Joy Allukas, Venkata Nagar", 
  "Grand Trunk Rd, Phagguwal",
  "Adjoining Eldeco Greens, Near Khambra Gate, Jalandhar - Nakodar Rd, Jalandhar", "255, Mala Rd, near Saint Paul's School, Railway Station Area, Kota",
  "11/168-169, Bhagat Singh Marg, near RTO Office Housing Board Bhiwadi, Sector 9, U.I.T., Bhiwadi","No 24, 41, Besant Ave Rd, New N.G.O Colony, Karpagam Gardens, Adyar, Chennai", 
  "1, Ashram St, Murugambedu, Kallikuppam, Ambattur, Chennai",
  "15-2-756, Osmangunj, Jam Bagh, Hyderabad", 
  "11-4-150/59, Sri Venkateshwara Colony, Saroornagar",
  "V7F3+3RW, Bhubanban, Agartala", "Q77M+9CH, Amtali, Madhupur","A-36, Nehru Garden Sharma Pharmacy, Aadarsh Ln, Khora Colony", 
  "D128 ,3rd Floor Sector10, Greater Noida",
  "6, Tilak Rd, Tilak Nagar, Paltan Bazaar, Dehradun", "1137, Krishna Market Road, Subhash Nagar, Dehradun",
  "Rajib Nagar Main Rd, near DARJEELING More, Ward 46, Pradhan Nagar, Siliguri","Block-Bhagwanpur-II, P.S. Bhupatinagar, Dist, Paushi"];

  let state = ["Andaman and Nicobar", "Andaman and Nicobar","Andhra Pradesh", "Andhra Pradesh","Arunachal Pradesh", 
  "Arunachal Pradesh","	Assam", "Assam","Bihar", "Bihar","Chandigarh", "Chandigarh","Chhattisgarh", "Chhattisgarh",
  "Delhi", "Delhi",
  "Goa", "Goa","Gujarat", "Gujarat","Haryana", "Haryana","Himachal Pradesh", "Himachal Pradesh","Jammu and Kashmir",
   "Jammu and Kashmir","Jharkhand", "Jharkhand","Karnataka", "Karnataka","Kerala", "Kerala",
   "Madhya Pradesh", "Madhya Pradesh","Maharashtra", "Maharashtra",
   "Mizoram","Nagaland", "Nagaland","Orissa", "Orissa","Puducherry", "Puducherry","Punjab", "Punjab",
   "Rajasthan", "Rajasthan","Tamil Nadu", "Tamil Nadu","Telangana", "Telangana","Tripura", "Tripura",
   "Uttar Pradesh", "Uttar Pradesh","Uttarakhand", "Uttarakhand","West Bengal", "West Bengal"]

  let current_condition = ["Good", "Poor", "Average", "Urgent Need"];

  let founder = ["Libby Merritt", "Macaulay Crane","Sarah Fulton", "Marcia Dyer","Aimee Wynn", 
  "Germaine Bradley","Keaton Craig", "Paul Mendez","Tanek Page", "Ashely Banks","Jenna Arnold", "Rahim Franco","Buffy Mooney", "Ifeoma Bell",
  "Paula Britt", "Leroy Moon",
  "Guinevere Gates", "Mara Wyatt","Sonya Mccullough", "Bryar Morton","Farrah Moore", "Roth Tate","Mari Flynn", "Maxwell Delaney","Amela Graham",
   "Sharon Foreman","Norman Hahn", "Tanek Sears","Sage Everett", "Hector Snow","Leandra Perry", "September Wood",
   "Amaya Rice", "Beatrice Mcneil","Sophia Cote", "Emmanuel Jarvis",
   "Hiram Mcgee","Maisie Hunt", "Hayfa Chaney","Emily Logan", "Coby Jenkins","Jacqueline Summers", "Yardley Cleveland","Sydnee Blake", "Quin Bryan",
   "Brendan Ayala", "Amena Crosby","Richard Huff", "Oliver Anderson","Lael O'connor", "Signe Vargas","Britanney Chan", "Chaim Cunningham",
   "Camden White", "Jermaine Mcdowell","Merrill Cleveland", "Rama Montgomery","Dorothy Avery", "Linus Maddox"];

  let founded = [2004,2007,1986,1999,1997,2002,1998,1992,2008,1997,1992,2010,1997,1998,2009,
    1998,1998,1994,2009,2007,2006,2010,1987,2006,1992,1996,2004,2009,1992,2010,2000,2004,2000,2013,
    2009,1991,1993,2007,1994,1994,1987,2005,1994,2004,2010,2011,2012,1992,1998,1996,1990,2011,2008,
    1993,1998,1998,2005,2010,1997,2009,1997];

    let donations = [2004,2007,1986,1999,1997,2002,1998,1992,2008,1997,1992,2010,1997,1998,2009,
      1998,1998,1994,2009,2007,2006,2010,1987,2006,1992,1996,2004,2009,1992,2010,2000,2004,2000,2013,
      2009,1991,1993,2007,1994,1994,1987,2005,1994,2004,2010,2011,2012,1992,1998,1996,1990,2011,2008,
      1993,1998,1998,2005,2010,1997,2009,1997];

  for (let i = 0; i < state.length; i++) {
    let idx = Math.floor(Math.random() * (current_condition.length));
    console.log(idx);
    console.log(i);
    let obj = {
      // around user location
      name: name[i],
      address: address[i],
      state: state[i],
      number_of_children: number_of_children[i],
      contact: contact[i],
      current_condition: current_condition[idx],
      founded: founded[i],
      founder: founder[i],
      donation: donations[i]
    };

    // console.log(orphanage_data);
    writeOrphanageData(obj, i);
  }
}



export {
    update,
};
  
