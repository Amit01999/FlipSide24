import img1 from '@/assets/BlogImage/1.png';
import img2 from '@/assets/BlogImage/2.png';
import img3 from '@/assets/BlogImage/3.png';
import img4 from '@/assets/BlogImage/4.png';
import img5 from '@/assets/BlogImage/5.png';
import img6 from '@/assets/BlogImage/6.png';
import img7 from '@/assets/BlogImage/7.png';
import img8 from '@/assets/BlogImage/8.png';
import img9 from '@/assets/BlogImage/9.png';
import img10 from '@/assets/BlogImage/10.png';
import img11 from '@/assets/BlogImage/11.png';
import img12 from '@/assets/BlogImage/12.png';
import img13 from '@/assets/BlogImage/13.png';
import img14 from '@/assets/BlogImage/14.png';
import img15 from '@/assets/BlogImage/15.png';
import img16 from '@/assets/BlogImage/16.png';
import img17 from '@/assets/BlogImage/17.png';
import img18 from '@/assets/BlogImage/18.png';
import img19 from '@/assets/BlogImage/19.png';
import img20 from '@/assets/BlogImage/20.png';
import img21 from '@/assets/BlogImage/21.png';
import img22 from '@/assets/BlogImage/22.png';
import img23 from '@/assets/BlogImage/23.png';
import img24 from '@/assets/BlogImage/24.png';
import img25 from '@/assets/BlogImage/25.png';
import img26 from '@/assets/BlogImage/26.png';
import img27 from '@/assets/BlogImage/27.png';
import img28 from '@/assets/BlogImage/28.png';
import img29 from '@/assets/BlogImage/29.png';
import img30 from '@/assets/BlogImage/30.png';
import img31 from '@/assets/BlogImage/31.png';
import img32 from '@/assets/BlogImage/32.png';
import img33 from '@/assets/BlogImage/33.png';
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory?: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  isEditorPick?: boolean;
  views: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  subcategories?: { name: string; slug: string }[];
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'News',
    slug: 'news',
    subcategories: [
      { name: 'National', slug: 'national' },
      { name: 'Politics', slug: 'politics' },
      { name: 'Crime', slug: 'crime' },
      { name: 'Corruption', slug: 'corruption' },
      { name: 'International Relations', slug: 'international-relations' },
      { name: 'Economy', slug: 'economy' },
    ],
  },
  {
    id: '2',
    name: 'Exclusive',
    slug: 'exclusive',
  },
  {
    id: '3',
    name: 'Red Flag',
    slug: 'red-flag',
    subcategories: [
      { name: 'Rumour Scan', slug: 'rumour-scan' },
      { name: 'Yellow Card', slug: 'yellow-card' },
    ],
  },
  {
    id: '4',
    name: 'Monitoring',
    slug: 'monitoring',
  },
  {
    id: '5',
    name: 'Research',
    slug: 'research',
  },
  {
    id: '6',
    name: 'Features',
    slug: 'features',
    subcategories: [
      { name: 'Culture', slug: 'culture' },
      { name: 'Sports', slug: 'sports' },
      { name: 'Cinema', slug: 'cinema' },
      { name: 'Literature', slug: 'literature' },
      { name: 'History', slug: 'history' },
    ],
  },
  {
    id: '7',
    name: 'Views',
    slug: 'views',
  },
  {
    id: '8',
    name: 'Editorial',
    slug: 'editorial',
  },
];

export const sampleNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Over 70,000 Expatriate Bangladeshis Registered for Postal Voting',
    slug: 'over-70000-expatriate-bangladeshis-registered-postal-voting',
    excerpt:
      'A total of 70,660 expatriate Bangladeshis have registered for the country’s first-ever postal voting system ahead of the 13th national election, according to updated data from the Election Commission.',
    content:
      'A total of 70,660 expatriate Bangladeshis have so far registered to take part in the country’s first-ever postal voting system ahead of the 13th national election and the national referendum. Updated figures on the Election Commission (EC) website show that, as of 11:30 am on Friday, 59,510 men and 11,150 women had completed their registration through the “Postal Vote BD” mobile application.\n\nAccording to country-wise data, the highest number of registrations has come from the United States, with 14,236 expatriates enrolled. This is followed by 9,075 from South Korea, 7,087 from Canada, 6,452 from Japan, 6,027 from Australia and 4,480 from South Africa.\n\nEC officials said registration was temporarily suspended in Saudi Arabia and six other countries after it was found that many users were entering incorrect or incomplete address information. As ballot papers must be dispatched to precise postal addresses written in English and including full postal codes, the suspension was enforced to avoid delivery failures.\n\nMd Ruhul Amin Mallik, Director (Public Relations) at the EC Secretariat, stated that efforts were underway to resume the service in those countries by the end of the day.\n\nOn Thursday, EC Senior Secretary Akhtar Ahmed and OCV & SDI Project Team Leader Brigadier General (Retd) Salim Ahmad Khan said the problem was detected early that morning when users failed to properly fill in mandatory address fields. In response, the EC temporarily halted registration to prevent complications in sending out ballot papers.\n\nThey added that expatriates would be notified through embassies and other communication channels about the need to provide accurate and complete address details. “Inshallah, we are trying to reopen the app on Friday,” they said.\n\nThe EC has now reopened registration globally through the app.\n\nAccording to an EC press release, expatriate Bangladeshis can register from 12:01 am on 27 November until 11:59 pm on 18 December, from any country in the world.\n\nInitially, after the app was launched on 18 November, the expatriate population was divided into eight regions, each allocated a separate five-day registration window. This system has since been withdrawn to make registration more accessible.\n\nTo cast their vote by post, expatriates must use a mobile number from the country in which they currently reside. After downloading the “Postal Vote BD” app from the Google Play Store or Apple App Store, users can choose either Bangla or English and follow on-screen instructions to upload the required documents. Providing a correct and complete postal address is essential to ensure receipt of the ballot papers.',
    category: 'National',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-28T06:00:00Z',
    imageUrl: img1,
    isBreaking: false,
    isFeatured: false,
    isEditorPick: false,
    views: 0,
    tags: ['expatriates', 'election', 'postal voting', 'Bangladesh', 'EC'],
  },
  {
    id: '2',
    title: 'Six Buildings Declared Risky in Narayanganj Following Earthquake',
    slug: 'six-buildings-declared-risky-narayanganj-earthquake',
    excerpt:
      'Six buildings, including three that tilted during the recent 5.7-magnitude earthquake, have been declared risky in Narayanganj after inspections by RAJUK and IEB engineers.',
    content:
      'Six buildings—including three that tilted during the 5.7-magnitude earthquake—have been marked as risky in Narayanganj. A team of engineers from RAJUK and the Institution of Engineers, Bangladesh (IEB), visited the Siddhirganj Bhumi Palli area on Wednesday (November 27) to assess the condition of the structures.\n\nWarning notices have been placed on the buildings, and owners have been instructed to evacuate all residents immediately.\n\n“We examined the three damaged buildings and found identical problems in each. The tilting occurred due to soil settlement, although no internal structural cracks were detected,” said IEB Vice President Engineer A.T.M. Tanbir-ul-Hasan Tamal. He added that the buildings lacked proper foundations and sufficient deep piling during construction.\n\nTamal noted that measurements will be taken and a detailed report submitted to RAJUK, after which the authorities will determine the next course of action.\n\nEngineer Rangan Mondal, RAJUK Narayanganj Zone-8 officer, said, “BUET and other relevant agencies will conduct further inspections. These buildings cannot be used until they are officially declared safe.”\n\nOn November 21, a strong 5.7-magnitude earthquake with its epicentre in Madhabdi, Narsingdi, shook Dhaka and several surrounding districts. At least 10 people were reported dead, and hundreds were injured in the tremor.',
    category: 'National',
    subcategory: 'Disaster',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-28T06:00:00Z',
    imageUrl: img2,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: false,
    views: 0,
    tags: ['earthquake', 'Narayanganj', 'RAJUK', 'IEB', 'disaster'],
  },
  {
    id: '3',
    title: 'Another Earthquake Jolts Dhaka and Narsingdi',
    slug: 'another-earthquake-jolts-dhaka-narsingdi',
    excerpt:
      'A 3.6-magnitude earthquake struck Dhaka, Narsingdi and nearby regions this afternoon, marking the fourth tremor reported in Narsingdi in recent days.',
    content:
      'A fresh earthquake shook Dhaka, Narsingdi and surrounding areas this afternoon, occurring only days after three consecutive tremors were recorded in the region.\n\nRubyet Kabir, acting officer at the Earthquake Monitoring Centre of the Bangladesh Meteorological Department, said the 3.6-magnitude quake struck at 4:15 pm. The epicentre was located in Ghorashal, Narsingdi, approximately 28 kilometres northeast of the BMD Seismic Centre in Dhaka’s Agargaon.\n\nWith this latest tremor, Narsingdi has now experienced four earthquakes in recent days.\n\nEarlier, on November 22, a 4.3-magnitude quake was felt about seven and a half hours after another tremor was recorded in Palash upazila of Narsingdi the same morning.\n\nOn November 21, a strong earthquake shook several parts of the country, including Dhaka, leaving 10 people dead.',
    category: 'National',
    subcategory: 'Disaster',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-27T06:00:00Z',
    imageUrl: img3,
    isBreaking: true,
    isFeatured: false,
    isEditorPick: false,
    views: 0,
    tags: ['earthquake', 'Dhaka', 'Narsingdi', 'BMD', 'disaster'],
  },
  {
    id: '4',
    title: 'Purbachal Plot Scam: Hasina Sentenced to 21 Years in Graft Cases',
    slug: 'purbachal-plot-scam-hasina-sentenced-21-years-graft-cases',
    excerpt:
      'A special court in Dhaka has sentenced former Prime Minister Sheikh Hasina to 21 years in three graft cases related to illegal plot allotments in Purbachal, while her children Joy and Putul received five-year jail terms each.',
    content:
      'A special court in Dhaka has convicted deposed Prime Minister Sheikh Hasina and her two children in corruption cases linked to the allotment of plots in Dhaka’s Purbachal New Town project.\n\nHasina was sentenced to 21 years’ rigorous imprisonment — seven years in each of the three cases filed by the Anti-Corruption Commission (ACC) this year. Her son, Sajeeb Wazed Joy, and daughter, Saima Wazed Putul, were co-accused in separate cases and sentenced to five years each.\n\nThe court found that Hasina, who is currently in India, had illegally secured plots for herself and family members by abusing her position, despite their ineligibility under existing regulations. The sentences were handed down by Judge Mohammad Abdullah Al Mamun of Special Judge’s Court-5 in Dhaka, with the three accused absent.\n\nThe judge clarified that Hasina’s jail terms would run consecutively. Delivering the verdict in a packed courtroom, Judge Mamun noted that exemplary punishment was warranted given the persistent misuse of political authority for personal gain.\n\nAlong with the jail terms, Hasina was fined Tk 3 lakh across the three cases; failure to pay would result in an additional 18 months’ imprisonment. Joy and Putul were each fined Tk 1 lakh.\n\nAccording to the prosecution, the three trials concluded after 13 hearings. Among the 20 other accused were former ministers, senior secretaries, and former officials of Rajuk. Nineteen of them received sentences ranging from one to 18 years, while one was acquitted.\n\nThe ACC lodged six separate cases between January 12 and 14 over irregularities in plot allocations under the Purbachal New Town project. The ACC alleged that Hasina colluded with senior Rajuk officials to unlawfully acquire six plots, each measuring 10 kathas, in the diplomatic zone of Sector 27. Beneficiaries included Hasina, Joy, Putul, her sister Sheikh Rehana, nephew Radwan Mujib Siddiq Bobby, and niece Azmina Siddiq.\n\n“The allotments were processed and approved inconsistently with lawful administrative practices, conferring undue benefits on her relatives,” the judgment reads.\n\nThe court highlighted that despite serving four terms as prime minister, Hasina disregarded allotment rules designed to ensure fairness and prevent the concentration of state resources within a single family.\n\n“She treated public land as if it were private property, exploiting state resources and manipulating official procedures for personal gain,” the judgment added.\n\nJudge Mamun noted that such conduct reflects a deliberate abuse of public office, a belief that high political power places one above the law, and a greedy attitude toward public property — actions that erode public trust and undermine integrity and accountable governance.\n\nFollowing the verdict, Sajeeb Wazed Joy posted on his verified Facebook page, stating that the plots were purchased legally with their own funds. He claimed that the family received no official communication, were not allowed to hire lawyers, and faced no due process. He added, “The aim of this verdict was to prevent any of us from running for elections.”\n\nHasina was ousted from office on August 5 last year, amid a student-led mass uprising. She currently faces over 550 cases filed across various police stations and courts nationwide.\n\nKey figures among the 20 accused received the following sentences include Sharif Ahmed, former state minister of housing and public works — who got 18 years’ rigorous imprisonment and a fine of Tk 3 lakh. Former secretaries Shahid Ullah Khandaker and Kazi Washi Uddin faced 18 years each and Tk 3 lakh fines. Besides, former senior assistant secretary Purabi Goldar faced three years’ simple imprisonment and a Tk 20,000 fine, former Rajuk chairman Anisur Rahman Miah got 15 years’ imprisonment and Tk 1.5 lakh fine, former Rajuk members Mohammad Nasir Uddin and Shamsuddin Ahmod Chowdhury got nine years each and Tk 60,000 fine each, and another former member Mohammad Khurshid Alam faced three years and a fine.\n\nOther Rajuk officials received sentences ranging from one to 12 years, with fines proportionate to their involvement. One former administrative officer, Saiful Islam Sarkar, was acquitted.\n\nACC Public Prosecutor Khan Md Moinul Hasan Lipon told reporters that the commission is not satisfied with the verdicts and may take further steps to challenge them.\n\nOn March 25, the ACC filed six charge sheets naming Hasina as a common accused, including the three cases decided yesterday. Charges were framed against 29 people on July 31, including Hasina, Rehana, Joy, Putul, Bobby, Tulip, and Azmina.',
    category: 'Politics',
    subcategory: 'Politics',
    author: 'Correspondent, Law and Justice',
    publishedAt: '2025-11-28T06:00:00Z',
    imageUrl: img4,
    isBreaking: true,
    isFeatured: false,
    isEditorPick: false,
    views: 0,
    tags: [
      'Purbachal',
      'corruption',
      'ACC',
      'Sheikh Hasina',
      'verdict',
      'politics',
    ],
  },
  {
    id: '5',
    title: 'Nation Eagerly Awaits Election: Fakhrul',
    slug: 'nation-eagerly-awaits-election-fakhrul',
    excerpt:
      'BNP Secretary General Mirza Fakhrul Islam Alamgir says the nation is eagerly waiting for the upcoming national election expected in February, hoping for a return to democratic governance.',
    content:
      'BNP Secretary General Mirza Fakhrul Islam Alamgir has said that the entire nation is eagerly anticipating the upcoming Jatiya Sangsad election, which is expected to be held in the first half of February next year. “The whole nation is waiting for the national election in February, through which we hope to return to a democratic system—and this is what everyone wants,” he said at the inaugural session of the Bangladesh Federal Union of Journalists (BFUJ) Biennial Council-2025 at the National Press Club.\n\nFakhrul stressed the need to uphold freedom of expression, saying, “We must value the right of others to speak. I may not agree with you, but I will protect your right to express your opinion.” He added that individuals with differing views are often labelled as adversaries in the country, and false propaganda is spread against them. “We all should avoid such practices,” he said.',
    category: 'Politics',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-28T06:00:00Z',
    imageUrl: img5,
    isBreaking: false,
    isFeatured: false,
    isEditorPick: false,
    views: 0,
    tags: ['politics', 'BNP', 'election', 'Fakhrul', 'democracy'],
  },
  {
    id: '6',
    title: 'Jamaat Ameer Visits Korail Slum After Devastating Fire',
    slug: 'jamaat-ameer-visits-korail-slum-after-devastating-fire',
    excerpt:
      'Jamaat-e-Islami Ameer Dr Shafiqur Rahman visited the Korail slum late Tuesday night to assess damage from a massive fire and offer support to affected families.',
    content:
      'Bangladesh Jamaat-e-Islami Ameer Dr Shafiqur Rahman visited the Korail slum late Tuesday night (November 26) to assess the extensive damage caused by a massive fire and to speak with families affected by the incident. “The fire destroyed many makeshift houses in a short span of time, leaving low-income families without shelter, income or savings,” he told the media around 11:30 pm.\n\nDuring the visit, he inspected the burnt structures and spoke with residents who had lost their homes and belongings. He was accompanied by Dhaka North City’s Medical Thana President and Jamaat candidate for Dhaka-17, Dr S.M. Khaliduzzaman, his personal assistant Nazrul Islam, and other local party leaders.\n\n“Although there were no casualties, it is heartbreaking to see so many families lose the only roof they had. The fear and grief on their faces moved us deeply,” Dr Rahman said.\n\nAs immediate relief, the Jamaat Ameer distributed two blankets and food items to each affected family. He assured residents that the party would continue to stand by them out of humanitarian responsibility.\n\nDr Rahman emphasised that it is the government’s primary obligation to ensure safe shelter, food, clean water, medical treatment, clothing and long-term rehabilitation for families affected by such disasters. He also called on NGOs, humanitarian organisations and capable individuals to extend support.\n\nReferring to the residents as mostly low-income earners, he questioned why fires occur repeatedly in densely populated slums and whether any foul play may be involved. He demanded a proper investigation into the incident and stressed that those responsible must be brought to justice.',
    category: 'Politics',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-26T06:00:00Z',
    imageUrl: img6,
    isBreaking: false,
    isFeatured: false,
    isEditorPick: false,
    views: 0,
    tags: ['fire', 'Korail', 'Jamaat', 'relief', 'Dhaka'],
  },
  {
    id: '7',
    title: 'Discussions on “Third Alliance” Stalled',
    slug: 'discussions-third-alliance-stalled-ncp-ab-party',
    excerpt:
      'Talks to form a new electoral alliance involving NCP, AB Party, United People’s Bangladesh and several other parties have been put on hold after differences emerged over key issues, including the inclusion of former Islami Chhatra Shibir leaders.',
    content:
      'Talks on a possible electoral alliance between the National Citizen Party (NCP) and the Amar Bangladesh Party (AB Party), along with the United People’s Bangladesh, and some other parties have been temporarily stalled.\n\n' +
      'The alliance was scheduled to be formally launched on yesterday afternoon at the Shaheed Abu Saeed Convention Centre in Shahbagh but it was postponed after a meeting held among the parties in Wednesday night.\n\n' +
      'It was supposed to be strong “third alliance” in the politics, in line with the BNP and Jamaat backed other two alliances as some other parties include Rastra Sangsar Andolon, Gonoadhikar Parishad, and Jatiya Samajtantrik Dal (JSD) was supposed to join under one umbrella ahead of the upcoming national election.\n\n' +
      'Sources said during the Wednesday’s discussions, NCP expressed strong objections on a particular issue, while some leaders of the Gonoadhikar Parishad were divided over joining the alliance.\n\n' +
      'It is now uncertain whether a major alliance would come forward before the election.\n\n' +
      'From Wednesday afternoon, the NCP Executive Council discussed the pros and cons of the potential electoral alliance for nearly four hours. Most leaders expressed a positive outlook toward the alliance. However, when the issue of including United People Bangladesh — a political platform formed by former leaders of the Islami Chhatra Shibir — was raised, most NCP leaders opined negative.\n\n' +
      'Later, from 10:00 pm, a meeting was held at Rupayan Trade Centre in Banglamotor area between NCP and Gonadhikar Parishad leaders. Another meeting continued until 3:30 am with AB Party and Rastra Sangsar Andolon leaders, but unresolved issues meant no decision was reached.\n\n' +
      'A senior leader from one of the participating parties told reporters that the process has been stalled primarily due to NCP’s opposition to United People’s Bangladesh and internal divisions within Gonoadhikar Parishad.',
    category: 'Politics',
    subcategory: 'Politics',
    author: 'Correspondent, Politics and Governance',
    publishedAt: '2025-11-29T04:30:00Z',
    imageUrl: img7,
    isBreaking: true,
    isFeatured: false,
    isEditorPick: true,
    views: 12457,
    tags: [
      'politics',
      'third alliance',
      'NCP',
      'AB Party',
      'election',
      'coalition',
    ],
  },
  {
    id: '8',
    title: '13 Army Officers Produced Before International Crimes Tribunal',
    slug: '13-army-officers-produced-international-crimes-tribunal',
    excerpt:
      'Thirteen high-ranking army and RAB officers, including several former Additional DGs of RAB and ex-DGFI directors, were brought before the International Crimes Tribunal on Sunday in two separate cases involving enforced disappearances and crimes against humanity during the ousted Awami League regime.',
    content:
      'Thirteen army officers were brought before the International Crimes Tribunal today in two separate cases involving allegations of crimes against humanity, including enforced disappearances and torture, committed during the Awami League government. They arrived at the tribunal premises in a green Bangladesh Jail prison van at around 10:00 am on Sunday.\n\n' +
      'A total of 17 individuals have been accused in the case concerning enforced disappearances inside the Taskforce for Interrogation Cell (TFI Cell). Of them, 10 have been arrested. The arrested officers are: Brigadier General Md Jahangir Alam, Brigadier General Tofayel Mostafa Sarwar, Brigadier General Md Kamrul Hasan, Brigadier General Md Mahabub Alam, Brigadier General K.M. Azad, Colonel Abdullah Al Momen, Colonel Anwar Latif Khan (on PRL), Lieutenant Colonel Md Mashiur Rahman, Lieutenant Colonel Saiful Islam Sumon, and Lieutenant Colonel Md Sarwar Bin Kashem.\n\n' +
      'During the ousted Awami League government, the first seven of the accused served as Additional Directors General of the Rapid Action Battalion (RAB), while the remaining three served as Directors of RAB’s intelligence wing. All ten of the arrested officers were brought before the tribunal today.\n\n' +
      'Ousted Prime Minister Sheikh Hasina, former Home Minister Asaduzzaman Khan, former prime minister’s adviser Tarique Ahmed Siddique, and four others named in this case remain fugitives.\n\n' +
      'In a separate case related to enforced disappearances inside the Joint Interrogation Cell (JIC), 13 individuals have been accused. Three of them have been arrested: former Directorate General of Forces Intelligence (DGFI) Directors Major General Sheikh Md Sarwar Hossain, Brigadier General Md Mahbubur Rahman Siddiqui, and Brigadier General Ahmed Tanvir Mazahar Siddiqui. These three officers were also produced before the tribunal today.\n\n' +
      'In this second case, ousted Prime Minister Sheikh Hasina, former prime minister’s adviser Tarique Ahmed Siddique, and eight others remain absconding.\n\n' +
      'Earlier, on October 22, the arrested accused were produced before the tribunal for the first time.',
    category: 'Crime',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-23T12:00:00Z',
    imageUrl: img8,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 28741,
    tags: [
      'International Crimes Tribunal',
      'crimes against humanity',
      'enforced disappearance',
      'RAB',
      'DGFI',
      'Awami League',
      'army officers',
    ],
  },
  {
    id: '9',
    title:
      'DUCSU Member Rafia’s Mymensingh Home Targeted with Crude Bomb Attack',
    slug: 'ducsu-member-rafia-mymensingh-home-crude-bomb-attack',
    excerpt:
      'The family home of DUCSU member Umma Uswatun Rafia in Mymensingh was attacked with a crude bomb in the early hours of Wednesday, leaving burn marks on the gate and raising serious security concerns for the student leader’s family.',
    content:
      'A crude bomb explosion occurred early Wednesday at the home of Umma Uswatun Rafia, a member of the Dhaka University Central Students’ Union (DUCSU), in Mymensingh. The blast took place around 3:00 am in the city’s Dholadia area.\n\n' +
      'Police visited the scene at noon on Thursday after receiving information about the incident. A case was filed later in the afternoon at the local police station against unidentified perpetrators.\n\n' +
      'Rafia’s family resides in the four-storey house, where her grandmother, mother, brother and several tenants also live. Her mother, Jinnat Mahal, said the explosion took place at 2:55 am when unidentified attackers detonated a crude bomb at the main gate of their house. Residents heard a loud blast, and burn marks were later found on several parts of the gate.\n\n' +
      '“I have no enmity with anyone. Since my daughter is a DUCSU leader, this incident happened because of her activities. We now feel unsafe,” Jinnat Mahal said.\n\n' +
      'Around 2:00 pm on Thursday, Mymensingh Superintendent of Police Kazi Akhtar-ul-Alam and other officials inspected the location.\n\n' +
      'Later in the afternoon, Rafia’s brother, Khandakar Julkarnain, submitted a written complaint to Kotwali Model Police Station, which was registered as a case under the Explosives Act. The complaint states that unknown assailants detonated an explosive device and attempted to set fire to the house using kerosene and petrol, with the intent to cause harm and spread fear.\n\n' +
      'Kotwali Model Police Station Officer-in-Charge Md Shibirul Islam confirmed that a case has been filed and efforts are underway to identify and arrest those responsible.',
    category: 'Crime',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-20T14:00:00Z',
    imageUrl: img9,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: false,
    views: 15682,
    tags: [
      'DUCSU',
      'student politics',
      'crude bomb',
      'Mymensingh',
      'attack',
      'security threat',
    ],
  },
  {
    id: '10',
    title:
      'Jubo Dal Leader Golam Kibria Shot Dead on Orders from Fugitive Criminal Abroad',
    slug: 'jubo-dal-leader-kibria-killed-hired-assassins-order-from-abroad',
    excerpt:
      'Pallabi Jubo Dal member secretary Golam Kibria was gunned down in Mirpur-12 by hired killers allegedly acting on direct orders from a notorious local criminal, Mofizur Rahman alias Mamun, who is currently living abroad.',
    content:
      'A top criminal from Pallabi in Mirpur, Dhaka—currently living abroad—has emerged as the suspected mastermind behind the shooting death of Jubo Dal leader Golam Kibria. The fugitive, identified as Mofizur Rahman alias Mamun, is believed to have ordered the killing over disputes involving local dominance and financial transactions. The murder is thought to have been carried out by hired assailants.\n\n' +
      'Kibria, 47, served as the member secretary of Pallabi Thana Jubo Dal. The attack occurred around 6:45 pm on Monday when three masked assailants entered Bikrampur Hardware and Sanitary in Block B of Mirpur 12 and shot him at close range.\n\n' +
      'While fleeing, the assailants shot the battery-powered auto-rickshaw driver Arif Hossain in the waist for not moving fast enough. Local residents managed to catch one of the attackers, Jony Bhuiyan, 25, who was handed over to police.\n\n' +
      'Police say Jony has confessed to participating in the murder and confirmed that he and others were hired for the job. The two other shooters have been identified, and arrests are imminent.\n\n' +
      'Kibria’s wife, Sabiha Akhter alias Dina, filed a murder case on Tuesday naming five accused, including the detained Jony, and seven to eight unidentified persons.\n\n' +
      'Investigators and local BNP leaders state that Mamun had previously tried to use Kibria to establish control over the area, but Kibria refused—believed to be the primary motive behind the killing.\n\n' +
      'Deputy Commissioner Md Maksudur Rahman of Mirpur Division confirmed that police have identified both the motive and the mastermind behind the assassination.',
    category: 'Crime',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-19T18:30:00Z',
    imageUrl: img10,
    isBreaking: true,
    isFeatured: true,
    isEditorPick: false,
    views: 34219,
    tags: [
      'Jubo Dal',
      'political killing',
      'Mirpur',
      'assassination',
      'BNP',
      'extortion',
      'hired killers',
    ],
  },
  {
    id: '11',
    title:
      'Verdict Expected Thursday in Three Rajuk Plot Scam Cases Against Sheikh Hasina, Joy and Putul',
    slug: 'verdict-thursday-rajuk-plot-scam-cases-hasina-joy-putul',
    excerpt:
      'A Dhaka special court will deliver its judgment on Thursday in three corruption cases involving ousted prime minister Sheikh Hasina, her son Sajeeb Wazed Joy, daughter Saima Wazed Putul and 44 others over alleged illegal allocation of prime plots in Purbachal.',
    content:
      'A Dhaka court is scheduled to deliver its verdict on Thursday in three cases filed against 47 individuals—including ousted prime minister Sheikh Hasina, her son Sajeeb Wazed Joy and daughter Saima Wazed Putul—over alleged irregularities in Rajuk plot allocations.\n\n' +
      'Mir Ahammed Salam, public prosecutor representing the Anti-Corruption Commission (ACC), said the prosecution has successfully proved the charges through witnesses and documents and expects all accused, including the former premier and her children, to be convicted and sentenced to life imprisonment.\n\n' +
      'Judge Mohammad Abdullah Al Mamun of Dhaka Special Judge Court-5 fixed November 27 for pronouncing the verdict after conclusion of arguments from both sides.\n\n' +
      'Charges were framed in these three cases on July 31, with arrest warrants issued against the accused. The ACC filed a total of six cases in January 2025 alleging massive irregularities in the allocation of plots in Purbachal New Town project during the previous Awami League government. Charge-sheets were submitted on March 10, 2025.\n\n' +
      'The cases involve illegal allocation of multiple high-value plots to Sheikh Hasina, her family members—including Sheikh Rehana, Radwan Mujib Siddiq, Tulip Siddiq and others—and close associates in violation of Rajuk rules.\n\n' +
      'All prime accused, including Sheikh Hasina, remain fugitives abroad.',
    category: 'Corruption',
    subcategory: 'Politics',
    author: 'Court Correspondent',
    publishedAt: '2025-11-27T11:45:00Z',
    imageUrl: img11,
    isBreaking: true,
    isFeatured: true,
    isEditorPick: true,
    views: 41893,
    tags: [
      'Sheikh Hasina',
      'corruption case',
      'Rajuk plot scam',
      'Sajeeb Wazed Joy',
      'Saima Wazed Putul',
      'ACC',
      'verdict',
    ],
  },
  {
    id: '12',
    title:
      'ACC Fails to Submit Probe Report in Stock Manipulation Case Against Shakib Al Hasan, 15 Others',
    slug: 'acc-fails-probe-report-shakib-al-hasan-stock-manipulation-case',
    excerpt:
      'The Anti-Corruption Commission missed the deadline to submit its investigation report in a high-profile case accusing former cricket captain and ex-MP Shakib Al Hasan, his mother Shirin Akhter and 15 others of stock market fraud, manipulation and money laundering involving Tk 257 crore.',
    content:
      'The Anti-Corruption Commission (ACC) has failed to submit its investigation report in a case filed against former Bangladesh cricket captain and former Magura-1 MP Shakib Al Hasan, his mother Shirin Akhter, and 15 others on allegations of stock market manipulation, fraud and money laundering.\n\n' +
      'The report was due on Wednesday. As the ACC could not file it, Dhaka Metropolitan Senior Special Judge Sabbir Faiz set March 3, 2026, as the new deadline for submitting the investigation report.\n\n' +
      'Aminul Islam, assistant director of the ACC’s prosecution wing, confirmed the development.\n\n' +
      'The case was filed on May 17 by ACC Assistant Director Sajjad Hossain.\n\n' +
      'According to the case statement, the accused manipulated the stock market by artificially inflating share prices through illegal series transactions, fraudulent active trading, gambling and speculation using BO accounts linked to their interests. As a result, ordinary investors suffered significant financial losses.\n\n' +
      'The complaint states that Tk 256.97 crore was embezzled through these activities, described as “criminally acquired money.”\n\n' +
      'Of this, accused Abul Khair (Hiru), with the assistance of his wife Kazi Sadia Hasan, allegedly laundered Tk 29.94 crore by hiding its source and transferring it across various sectors. Investigators also detected unusual and suspicious transactions amounting to Tk 542.31 crore in 17 bank accounts operated in his name.\n\n' +
      'The case further alleges that Shakib Al Hasan invested in shares of Paramount Insurance Ltd, Crystal Insurance Ltd and Sonali Papers Ltd—companies whose stock prices were manipulated by Abul Khair. Through these investments, Shakib is accused of aiding market manipulation and earning Tk 2.95 crore in “realized capital gains” from general investors.',
    category: 'Corruption',
    subcategory: 'Politics',
    author: 'Court Correspondent',
    publishedAt: '2025-11-26T16:20:00Z',
    imageUrl: img12,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 56784,
    tags: [
      'Shakib Al Hasan',
      'stock market manipulation',
      'money laundering',
      'ACC',
      'corruption case',
      'fraud',
      'cricket',
    ],
  },
  {
    id: '13',
    title:
      'Dhaka Court Freezes Seven Bank Accounts of Journalist Subhash Singh Roy and Wife Momota Hena Lovely in Corruption Probe',
    slug: 'dhaka-court-freezes-bank-accounts-journalist-subhash-singh-roy-wife-corruption-case',
    excerpt:
      'A Dhaka special court has ordered the freezing of seven bank accounts holding Tk 42.73 lakh belonging to journalist and UniMed UniHealth director Subhash Chandra Singh Roy and his wife, former MP Kh Momota Hena Lovely, amid an ongoing ACC investigation into allegations of illegal wealth accumulation and money laundering.',
    content:
      'A Dhaka court has ordered the freezing of seven bank accounts containing a total of Tk 42,73,701 belonging to journalist and UniMed UniHealth Pharmaceuticals Director Subhash Chandra Singh Roy and his wife, former reserved seat MP Kh Momota Hena Lovely, who are under investigation on corruption charges.\n\n' +
      'Dhaka Metropolitan Senior Special Judge Sabbir Faiz issued the order on Thursday following a petition filed by the Anti-Corruption Commission (ACC). The development was confirmed by ACC Public Relations Officer and Deputy Director Akhtarul Islam.\n\n' +
      'According to the ACC, Assistant Director Bilkis Akhter submitted the application seeking to freeze the accounts. The petition stated that an investigation is underway against Subhash Chandra Singh Roy on allegations of illegally acquiring wealth and attempting to legitimise the money by transferring it into bank accounts operated under his own and associates’ names, as well as laundering funds abroad under the Money Laundering Prevention Act.\n\n' +
      'The bank accounts belonging to Subhash, his institutions and his wife have reportedly recorded transactions involving several crores of taka. Information from various sources suggests that they may be attempting to transfer or withdraw funds from these accounts.\n\n' +
      'The petition noted that if the money is moved or withdrawn before the investigation concludes, it could adversely affect the inquiry.\n\n' +
      'Earlier, on October 20, the same court imposed a travel ban on the couple.',
    category: 'Corruption',
    subcategory: 'Politics',
    author: 'Court Correspondent',
    publishedAt: '2025-11-13T15:10:00Z',
    imageUrl: img13,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: false,
    views: 23456,
    tags: [
      'Subhash Chandra Singh Roy',
      'Kh Momota Hena Lovely',
      'money laundering',
      'ACC',
      'corruption',
      'bank accounts frozen',
      'travel ban',
    ],
  },
  {
    id: '14',
    title:
      'PTI Demands Immediate Access to Jailed Imran Khan Amid Mounting Health Concerns',
    slug: 'pti-demands-access-jailed-imran-khan-health-concerns',
    excerpt:
      'Pakistan Tehreek-e-Insaf (PTI) has urged authorities to grant access to imprisoned former Prime Minister Imran Khan, raising alarms over his health after over three weeks without family or legal visits, amid reports of potential transfer to a high-security facility.',
    content:
      'Pakistan Tehreek-e-Insaf (PTI) on Thursday called on authorities to allow a meeting with jailed former Prime Minister Imran Khan, expressing serious concern over his health after more than three weeks without any contact from his family or legal team.\n\n' +
      'Khan, imprisoned since August 2023 and serving a 14-year sentence in a corruption case, has repeatedly claimed the charges were fabricated to force him out of politics—an allegation the military denies, according to UNB citing Arab News.\n\n' +
      'PTI spokesperson Zulfikar Bukhari told Reuters that no one has been permitted to meet Khan since November 4, and authorities have offered no explanation for the continued restrictions. He said Khan was being denied both visitation rights and medical attention despite being a former prime minister.\n\n' +
      '“His health is our concern. We are worried about his illegal isolation,” Bukhari said, urging the government to immediately allow access for Khan’s family, reports Dawn.\n\n' +
      'PTI supporters and Khan’s relatives have held demonstrations outside the Rawalpindi prison in recent days, demanding permission to meet him. Another attempt to visit Khan was planned for Thursday, Bukhari added. While prison regulations permit weekly meetings, PTI says access has frequently been suspended for extended periods.\n\n' +
      'Local media reports suggest the 73-year-old former cricket star may be moved to a high-security facility, potentially making access even more difficult. The situation has sparked significant public debate online, with the hashtag #WHEREISIMRANKHAN trending on X on Thursday.\n\n' +
      'Pakistan’s interior ministry did not comment on the matter. A jail official, speaking anonymously, told Reuters that Khan was in good health and said he was unaware of any plans to transfer him.\n\n' +
      'Khan, who took office as prime minister in 2018, was removed in 2022 through a parliamentary vote following a breakdown in relations with the country’s powerful military. His arrest last year triggered nationwide protests and a sweeping crackdown on PTI.\n\n' +
      'PTI emerged as the largest party in the 2024 general election but alleges widespread rigging reduced its seats, enabling other parties to form a coalition government under Prime Minister Shehbaz Sharif. The government has rejected the allegations.',
    category: 'International Relations',
    subcategory: 'Politics',
    author: 'International Desk',
    publishedAt: '2025-11-27T09:45:00Z',
    imageUrl: img14,
    isBreaking: true,
    isFeatured: true,
    isEditorPick: true,
    views: 51234,
    tags: [
      'Imran Khan',
      'PTI',
      'Pakistan politics',
      'jail access',
      'health concerns',
      'Rawalpindi prison',
      'election rigging',
    ],
  },
  {
    id: '15',
    title:
      'Israeli Army Fortifies Five Positions in South Lebanon One Year After Ceasefire',
    slug: 'israeli-army-fortifies-positions-south-lebanon-ceasefire-hezbollah',
    excerpt:
      'One year after the Israel-Hezbollah ceasefire, satellite imagery reveals the Israeli army maintaining and reinforcing five strategic positions in southern Lebanon, in violation of truce terms requiring withdrawal within 60 days, amid ongoing tensions and widespread destruction in border villages.',
    content:
      'One year after a ceasefire between Israel and Hezbollah, the Israeli army continues to maintain five positions in south Lebanon, reinforcing them with fortifications and widened access routes, according to satellite imagery analysed by AFP.\n\n' +
      'Under the November 27, 2024 truce—which aimed to end more than a year of hostilities between Israel and the Iran-backed group—Israel was required to withdraw all troops from Lebanon within 60 days. Hezbollah, in turn, was obligated to pull its fighters north of the Litani River, roughly 30 kilometres from the Israeli border, and dismantle its military infrastructure in the area.\n\n' +
      'Despite these terms, Israel has retained forces in five positions it considers strategically vital, arguing that the deployments are necessary to prevent Hezbollah from resuming military activities in south Lebanon.\n\n' +
      'AFP identified these bases through Planet Labs PBC satellite images. Positioned along ridgelines across the Blue Line—the de facto border—these outposts enable the Israeli army to monitor and exert control over several Lebanese border villages, a measure Israel views as essential for protecting nearby Israeli communities.\n\n' +
      'The positions overlook towns and villages including Kfar Kila, Aita al-Shaab, Maroun al-Ras, Aitaroun, Blida, Markaba and Hula—areas that saw some of the heaviest destruction from Israeli airstrikes and ground operations. Satellite images show that nearly all structures near the Hatzivoni outpost, situated between Hula and Markaba, have been destroyed.\n\n' +
      'Fortified with earthen embankments and other defences, the positions span roughly one to two hectares, typically consisting of a larger area with temporary buildings and a smaller section for military vehicles.\n\n' +
      'The westernmost outpost, in Labbouneh, appears to be built roughly 150 metres from a United Nations peacekeepers’ base and the Blue Line. The easternmost position, located on Hamames hill, is the deepest inside Lebanese territory—about 1.5 kilometres from the border.\n\n' +
      'Satellite data also indicates that access roads to these positions have been significantly widened to facilitate the movement of military vehicles.\n\n' +
      'As in the Gaza Strip, the Israeli army has systematically demolished buildings and infrastructure in villages closest to the border, an area subjected to extensive bombardment.\n\n' +
      'A comparison of satellite images by American researchers Corey Scher and Jamon Van Den Hoek of the University of Oregon, last updated in late January, found that Kfar Kila had been 65% destroyed. Aita al-Shaab and Yarin were 57% and 55% destroyed respectively.',
    category: 'News',
    subcategory: 'International Relations',
    author: 'International Desk',
    publishedAt: '2025-11-26T10:00:00Z',
    imageUrl: img15,
    isBreaking: true,
    isFeatured: true,
    isEditorPick: true,
    views: 28945,
    tags: [
      'Israel',
      'Hezbollah',
      'Lebanon',
      'ceasefire violation',
      'satellite imagery',
      'border positions',
      'destruction',
    ],
  },
  {
    id: '16',
    title:
      '6.6-Magnitude Earthquake Jolts Indonesia’s Simeulue Island, Residents Rush Outdoors',
    slug: '6-6-magnitude-earthquake-indonesia-simeulue-island',
    excerpt:
      'A strong 6.6-magnitude earthquake struck off the coast of Simeulue Island in western Indonesia on Thursday, sending panicked residents fleeing from buildings; no tsunami warning was issued and no immediate damage reported.',
    content:
      'A magnitude 6.6 earthquake struck an island off the coast of Sumatra in western Indonesia on Thursday, the United States Geological Survey (USGS) reported, with no immediate reports of damage and no tsunami warning issued.\n\n' +
      'The quake hit Simeulue Island at 11:56 am (0456 GMT) at a depth of 25 kilometres, prompting residents to run outdoors in fear.\n\n' +
      '“I was sitting at a coffee shop when the table suddenly started shaking. Many people rushed out of buildings and houses,” said Ahmadi, a local resident, speaking to AFP. “The earthquake was quite long — probably around seven seconds or more.”\n\n' +
      'He added that several aftershocks followed, though they were shorter in duration, and said he had not yet received information regarding any damage.\n\n' +
      'Following the quake, the Indian Ocean tsunami warning center announced that “there is no threat” of a tsunami. Indonesia’s Meteorology, Climatology and Geophysics Agency (BMKG) recorded the quake at a magnitude of 6.3 and a depth of 10 kilometres, noting that it did not have the potential to trigger a tsunami.\n\n' +
      'Indonesia, a vast archipelago in Southeast Asia, is prone to frequent earthquakes due to its location along the Pacific “Ring of Fire”—a belt of intense seismic activity where multiple tectonic plates converge. The region sees regular earthquakes and volcanic eruptions.\n\n' +
      'In January 2021, a magnitude 6.2 earthquake on Sulawesi island left more than 100 people dead and thousands homeless. In 2018, a magnitude 7.5 quake and subsequent tsunami in Palu, also on Sulawesi, killed more than 2,200 people.',
    category: 'International Relations',
    subcategory: 'World',
    author: 'International Desk',
    publishedAt: '2025-11-27T13:30:00Z',
    imageUrl: img16,
    isBreaking: true,
    isFeatured: true,
    isEditorPick: false,
    views: 18763,
    tags: [
      'Indonesia',
      'earthquake',
      'Simeulue',
      'Sumatra',
      'Ring of Fire',
      'natural disaster',
    ],
  },
  {
    id: '17',
    title:
      'Experts Call for Stronger Urban Governance and Local Economic Development in Bangladesh',
    slug: 'experts-urban-governance-local-economic-development-bangladesh',
    excerpt:
      'A national event organised by the Local Government Division with JICA and Switzerland highlighted the urgent need to strengthen municipal institutions, boost own-source revenue and expand citizen-centred services across Bangladesh’s cities and municipalities.',
    content:
      'The Local Government Division (LGD), in partnership with the Japan International Cooperation Agency (JICA) and the Embassy of Switzerland, organised a national-level event titled “Urban Governance and Economic Development” on Thursday at the Bangladesh–China Friendship Conference Center in Dhaka.\n\n' +
      'The programme emphasised improving urban governance, enhancing municipal capacity and scaling successful development models nationwide.\n\n' +
      'Md Wahadur Rahman, joint secretary of LGD and project director of Prabriddhi, highlighted the programme’s contributions to strengthening municipal institutions and promoting local economic development.\n\n' +
      'Ichiguchi Tomohide, chief representative of JICA Bangladesh, reiterated Japan’s long-standing support for local governance, while Diepak Elmer, deputy head of mission and head of cooperation at the Embassy of Switzerland, reaffirmed Switzerland’s commitment to building competitive, resilient and citizen-centred municipalities.\n\n' +
      'Md Mahmudul Hasan, director general of LGD’s Planning, Monitoring, Evaluation and Inspection Wing, formally inaugurated the event and stressed that well-functioning municipalities are essential for achieving Bangladesh’s economic aspirations.\n\n' +
      'Municipal representatives from Bogura, Shibganj, Bhairab, Jessore and Kushtia showcased achievements under the Prabriddhi and C4C 2 programmes, including improved revenue mobilisation, tax reassessment, digital billboards, One-Stop Service Centres (OSSC), Women’s Business Corners and modernised communication systems.\n\n' +
      'Discussions throughout the day covered budgeting, financial reporting, city governance assessments, performance measurement and experiences from major city corporations such as Dhaka North, Khulna, Chattogram, Comilla and Narayanganj.\n\n' +
      'Participants emphasised data-driven decision-making, public–private partnerships, MSME development and the wider application of local economic development tools.\n\n' +
      'A high-level plenary dialogue in the afternoon focused on strategies to strengthen urban governance, underscoring the critical role of effective municipal systems in supporting Bangladesh’s national economic growth.',
    category: 'Economy',
    subcategory: 'Politics',
    author: 'Staff Correspondent',
    publishedAt: '2025-11-27T19:00:00Z',
    imageUrl: img17,
    isBreaking: false,
    isFeatured: false,
    isEditorPick: true,
    views: 9876,
    tags: [
      'urban governance',
      'local economic development',
      'LGD',
      'JICA',
      'Switzerland',
      'Prabriddhi',
      'municipal reform',
      'Bangladesh cities',
    ],
  },
  {
    id: '18',
    title:
      'Bangladesh Bank Tightens Rules for Bank MD/CEO Appointments, Raises Experience to 25 Years',
    slug: 'bangladesh-bank-tightens-md-ceo-appointment-rules-25-years-experience',
    excerpt:
      'Bangladesh Bank has significantly raised the bar for appointing managing directors and CEOs, requiring a minimum of 25 years of banking experience and at least three years as DMD/AMD, in a move aimed at ensuring stronger leadership and governance in the sector.',
    content:
      'Bangladesh Bank has tightened the eligibility criteria for appointing managing directors (MDs) or chief executive officers (CEOs) in the country’s banking sector, raising the minimum experience requirement and introducing stricter conditions for candidates.\n\n' +
      'According to a circular issued on Wednesday and sent to all banks, an individual must now have at least 25 years of experience in the banking profession to qualify for the position of MD. The circular also mandates a minimum of three years of experience as a deputy managing director (DMD) or additional managing director (AMD), either individually or combined. Previously, the requirement was only two years.\n\n' +
      'After August 5, the minimum experience requirement had already been increased from 15 years (during the previous Awami League government) to 20 years. The latest directive further raises it to 25 years.\n\n' +
      'The new policy also applies to first-class (or equivalent) officials of banking and financial regulatory institutions seeking MD positions. They too must possess at least 25 years of experience, including service as an officer in Grade 2 of the National Pay Scale.\n\n' +
      'Bangladesh Bank stated that the revised provisions are designed to ensure professional, skilled, and highly experienced leadership in the banking sector. The central bank emphasised that the tougher standards will enhance discipline, accountability, and overall governance across the industry.',
    category: 'Economy',
    subcategory: 'Business',
    author: 'Financial Correspondent',
    publishedAt: '2025-11-26T17:45:00Z',
    imageUrl: img18,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 15689,
    tags: [
      'Bangladesh Bank',
      'banking regulation',
      'MD appointment',
      'CEO eligibility',
      'bank governance',
      'financial sector reform',
    ],
  },
  {
    id: '19',
    title:
      'Bank MDs, CEOs Must Now Have 25 Years of Experience: Bangladesh Bank',
    slug: 'bank-mds-ceos-25-years-experience-bangladesh-bank-new-rule',
    excerpt:
      'Bangladesh Bank has raised the minimum experience requirement for appointing managing directors and CEOs to 25 years, up from 20 years in August and 15 years during the Awami League era, in a fresh move to professionalise top banking leadership.',
    content:
      'Bangladesh Bank has introduced stricter eligibility criteria for appointing managing directors (MDs) and chief executive officers (CEOs) in the country’s banks, significantly increasing the minimum required experience.\n\n' +
      'According to a circular issued on Wednesday and sent to all banks, candidates must now have at least 25 years of experience in the banking profession to qualify for the role of MD. The circular further states that candidates must have a minimum of three years of experience as a deputy managing director (DMD) or additional managing director (AMD), either individually or combined. The previous requirement was two years.\n\n' +
      'The minimum experience threshold for MD appointments had been raised to 20 years on August 5. During the Awami League government, the requirement had been 15 years. The new policy tightens the criteria further by increasing the mandatory experience to 25 years.\n\n' +
      'The circular also outlines conditions for first-class (or equivalent) officials from banking and financial regulatory agencies who may be considered for MD positions. They, too, must have at least 25 years of experience, including service as an officer in Grade 2 of the National Pay Scale.\n\n' +
      'Bangladesh Bank said the revised guidelines aim to ensure professional, skilled and experienced leadership within the banking sector. The central bank added that the new provisions are expected to support more disciplined and responsible management across the industry.',
    category: 'Economy',
    subcategory: 'Business',
    author: 'Financial Correspondent',
    publishedAt: '2025-11-26T14:20:00Z',
    imageUrl: img19,
    isBreaking: true,
    isFeatured: true,
    isEditorPick: false,
    views: 22341,
    tags: [
      'Bangladesh Bank',
      'bank MD',
      'CEO appointment',
      'banking regulation',
      '25 years experience',
      'financial sector',
      'governance reform',
    ],
  },
  {
    id: '20',
    title:
      'Razia’s Life: Struggle and Dreams of a 12-Year-Old Flower Seller in Dhaka',
    slug: 'razia-flower-seller-dhaka-street-child-struggle-dreams',
    excerpt:
      'Twelve-year-old Razia sells flowers on the busy streets of Moghbazar to support herself and her younger brother after losing their parents, dreaming of one day becoming a teacher while surviving the harsh realities faced by thousands of street children in the capital.',
    content:
      'On a scorching afternoon in Moghbazar, the streets of Dhaka pulse with relentless energy—honking horns, rickshaws weaving through traffic, vendors shouting, and the smell of exhaust mixing with food from roadside stalls.\n\n' +
      'Amid this chaos, Razia, barely 12 years old, moves carefully with a tray of flowers balanced on her lap. Bright marigolds, roses, and jasmine are arranged neatly, each bundle a fragile splash of color against the grey concrete.\n\n' +
      'Razia has been selling flowers in this area since she was eight. Every day, before the sun rises, she collects flowers from local vendors and weaves them into small bouquets. By 7:30 am, she is on the roadside, calling out politely to drivers, office workers, and passersby.\n\n' +
      'Orphaned at a young age, Razia is raising her younger brother with whatever little she earns. “Some days, I don’t even get to eat properly,” she says, her fingers quickly arranging marigolds into a bundle. “But I have to keep going, for my brother. If I stay home, we starve.”\n\n' +
      'Despite her hardships, Razia dreams of attending school. “I want to learn. I want to become a teacher,” she says, her voice trembling with fragile hope.\n\n' +
      'According to UNICEF, over 30,000 street children live in Dhaka, many working long hours and deprived of education, healthcare, and protection. NGOs like Dhaka Ahsania Mission, BRAC, and Save the Children work to help, but the need far outstrips resources.\n\n' +
      '“These children also face economic abuse—many are forced into labour or begging. They are often deprived of rights to shelter, safety, food and education, and are vulnerable to violence. As a society, we owe them protection and a chance to dream,” says Abdullah Al Mamun, Director for Child Protection and Child Rights Governance at Save the Children Bangladesh.\n\n' +
      'Each bouquet Razia sells is more than just flowers—it is a symbol of resilience, courage, and a quiet plea for a better future in a city that too often looks away.',
    category: 'Red Flag',
    subcategory: 'Rumour Scan',
    author: 'Taufiq Hossain',
    publishedAt: '2025-11-29T08:00:00Z',
    imageUrl: img20,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 18932,
    tags: [
      'street children',
      'child rights',
      'Dhaka',
      'child labour',
      'education',
      'poverty',
      'human interest',
      'Save the Children',
    ],
  },
  {
    id: '21',
    title:
      'Viral Video Claiming Jamaat Leaders Chased in Chittagong Sand Extraction is Actually from Narsingdi Ferry Dispute',
    slug: 'viral-video-jamaat-leaders-chased-chittagong-actually-narsingdi-ferry-clash',
    excerpt:
      "A misleading video circulating on social media falsely claims villagers in Sitakunda, Chittagong chased Jamaat leaders during illegal sand extraction; fact-check reveals it depicts a November 8 clash over ferry fares in Narsingdi's Char Dighaldi, with no connection to Jamaat.",
    content:
      'It was claimed on social media that Jamaat leaders in Sitakunda, Chittagong were chased by villagers while attempting to fill agricultural land with sand. A video circulated on Facebook with this claim, showing villagers announcing over a loudspeaker and pursuing Jamaat leaders.\n\n' +
      'However, fact-checking reveals that the original video is actually from Narsingdi. The footage shows a dispute in Char Dighaldi in the char areas of Narsingdi on November 8, triggered by overcharging for ferry crossings.\n\n' +
      'On November 25, a Facebook page posted a video claiming: “Chittagong Sitakunda: Villagers chased Jamaat leaders after sand extraction and land filling.” By the time of reporting, the video had been viewed over 100,000 times and shared more than 900 times.\n\n' +
      'Several Facebook profiles, pages, and groups posted the same video with the same claim. In the 14-second clip, a daytime scene shows a wide field where people are running with stick-like objects, and indistinct shouting is audible. A voice behind the camera mentions trying to restrain someone.\n\n' +
      'Reverse image searches of key frames from the video traced it to a 50-second report by Jamuna TV uploaded on YouTube on November 8, with the description: “Announcement via loudspeaker leads to clash between two groups in Narsingdi; 15 injured.” The first 14 seconds of this video match exactly with the viral clip.\n\n' +
      'Further verification using relevant keywords by Dismislab found multiple online news reports and video coverage of the same Narsingdi incident. According to the Jamuna Television report, the original video depicts a clash in Narsingdi on November 8 over excessive ferry fares. Fifteen people were injured during two clashes in Jitramapur, Char Dighaldi Union, Madhabdi Upazila. Police later intervened to control the situation.\n\n' +
      'In conclusion, the viral video actually shows a fistfight during a dispute in Narsingdi on November 8 and has no connection to Jamaat leaders being chased by villagers in Sitakunda, Chittagong.\n\n' +
      'For context, a separate incident in Sitakunda’s Syedpur area on November 24 involved villagers using a mosque loudspeaker to chase Jamaat leaders away when a dredger machine was used to fill agricultural land with sand. In that case, the Jamaat leaders were indeed forced to flee.',
    category: 'Red Flag',
    subcategory: 'Rumor Scan',
    author: 'Rumour Scan Desk',
    publishedAt: '2025-11-29T12:00:00Z',
    imageUrl: img21,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 45678,
    tags: [
      'fact check',
      'viral video',
      'Jamaat',
      'Chittagong',
      'Narsingdi',
      'misinformation',
      'ferry dispute',
      'sand extraction',
      'Dismislab',
    ],
  },
  {
    id: '22',
    title:
      'Viral Video Claiming Islamist Attack on Gazipur Music Stage Is Actually Tea-Cigarette Price Dispute',
    slug: 'viral-gazipur-music-stage-attack-video-actually-tea-cigarette-dispute',
    excerpt:
      'A widely shared video alleging hardline Islamists destroyed a music stage at a Gazipur fair because “music is haram” has been proven false; fact-check shows the incident was triggered by a dispute over inflated prices of tea and cigarettes at a stall.',
    content:
      'A video has been circulating on X (formerly Twitter) claiming that Islamists destroyed a music stage at a fair in Gazipur, arguing that singing is forbidden in Islam. However, fact-checking reveals that the video actually shows an incident of assault and vandalism triggered by a dispute over the price of tea and cigarettes.\n\n' +
      'The video was shared with captions such as: “Breaking: Gazipur, #Bangladesh—hardline Islamists destroyed a music stage at a fair because music is forbidden in Islam. Artists had to flee.” Another post falsely claimed an “extremist Islamist group attacked the fair in Dhaka.” By the time of reporting, the clip had garnered approximately 150,000 views and around 500 shares.\n\n' +
      'Multiple credible media outlets, including Masranga Television and Jagonews, confirmed that the incident took place on November 22 in Shimultali, Gazipur. It began when a customer refused to pay an inflated price for cigarettes at a tea stall. Shopkeepers allegedly assaulted the customer, prompting students from Dhaka University of Engineering & Technology (DUET) and local residents to retaliate, resulting in widespread vandalism at the fair.\n\n' +
      'Sadar Police Station Officer-in-Charge Mehedi Hasan told Jagonews: “A minor dispute between locals and fair authorities escalated into vandalism. Police intervened promptly to control the situation.”\n\n' +
      'No police statement or media report has linked Islamist groups to the incident, and there is no evidence that a music stage was targeted for religious reasons.\n\n' +
      'In conclusion, the viral video claiming an Islamist attack on a music stage in Gazipur is actually footage of a fight over tea and cigarette prices.\n\n' +
      'Source: Dismislab',
    category: 'Red Flag',
    subcategory: 'Rumor Scan',
    author: 'Rumour Scan Desk',
    publishedAt: '2025-11-29T15:30:00Z',
    imageUrl: img22,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 67892,
    tags: [
      'fact check',
      'misinformation',
      'Gazipur',
      'viral video',
      'Islamist attack',
      'tea cigarette dispute',
      'Dismislab',
      'fake news',
    ],
  },
  {
    id: '23',
    title:
      'Political Figures and Journalists in Bangladesh Fuel Fake News Spread on Social Media',
    slug: 'political-figures-journalists-spread-fake-news-bangladesh-social-media',
    excerpt:
      'From fabricated photo-cards linking detainees to Islami Chhatra Shibir to AI-generated videos and misleading election claims, prominent politicians and media personalities are increasingly propagating disinformation on social platforms, eroding public trust and shaping false narratives.',
    content:
      'In recent months, several incidents in Bangladesh have highlighted the growing use of false information and fake news on social media by political figures and journalists.\n\n' +
      'On November 10, activists of the National Citizen Party (NCP) detained two individuals in the Bangla Motor area after an alleged attack involving a cocktail device near the party’s central office. The detainees were handed over to the police. Shortly after, a fabricated photo-card carrying the Amar Desh logo began circulating on Facebook, falsely claiming that one of the detained individuals was a leader of Islami Chhatra Shibir. Amar Desh confirmed that they had not published such a report, and the newspaper debunked the photo-card on its official Facebook page.\n\n' +
      'Ramna Model Police Station Officer-in-Charge Golam Faruk also confirmed that police investigations found no connection between the detainees and Shibir. Despite fact-checking by Amar Desh and independent organizations, BNP leaders Nilufar Chowdhury and Shahid Uddin Chowdhury Anee repeated the false claims during public talks in early to mid-November.\n\n' +
      'Experts warn that when influential figures propagate false information, the public is easily misled. Professor Sumon Rahman, Dean of Social Sciences at the University of Liberal Arts and Head of the Media Studies Department, said, “People trust these voices, and misinformation spreads quickly. Training or mandatory awareness programs could help curb this.”\n\n' +
      'AFP fact-checking editor Yamin Sajid added that such content is often created to discredit opponents and manipulate public opinion, yet the general public tends to believe it.\n\n' +
      'On November 12, Saiful Alam Khan Milon, a central Jamaat-e-Islami leader and MP candidate for Dhaka-12, falsely criticized BNP Secretary General Mirza Fakhrul Islam, claiming he had never won an election. In reality, Fakhrul Islam has been elected to Parliament three times.\n\n' +
      'Earlier, in August and September 2025, other Jamaat leaders repeatedly shared misleading statistics regarding Razakar lists and political affiliations of parties. Fact-checking by independent organizations found these claims to be false and based on outdated or manipulated information.\n\n' +
      'In July, Islamic Andolan Bangladesh Vice President Mufti Faizul Karim promoted an AI-generated video as a “public statement” during rallies. The video featured AI avatars making false allegations against the BNP, which were widely shared on Facebook.\n\n' +
      'Analysts and journalists have also cited false content from social media in talk shows. For instance, Dr. Nahreen I. Khan, a political analyst, referenced a fake statement attributed to a Sirajganj Jamaat leader on GTV, which prompted a defamation case. Similarly, Supreme Court lawyer Abu Hena Razzaki cited misleading information from an unreliable portal during a talk show on Ekushey TV.\n\n' +
      'Journalists themselves have sometimes unintentionally or deliberately repeated fake news. On November 13, during a Kaler Kantho talk show, Masud Kamal repeated a fake screenshot allegedly quoting Press Secretary Shafiqul Alam, despite fact-checkers confirming the content was fabricated.\n\n' +
      'The trend is not new. During the previous Awami League government’s 16-year tenure, false claims and fabricated statistics were frequently circulated to promote party leaders or discredit opponents. Examples include exaggerated claims about Prime Minister Sheikh Hasina being declared the “second best Prime Minister in the world” by the UN, which were widely shared across media, banners, and public events.\n\n' +
      'Experts say that political and media figures must exercise greater responsibility in verifying information before sharing it publicly. Without accountability, misinformation continues to shape narratives and public perception.\n\n' +
      'Source: The Dissent',
    category: 'Red Flag',
    subcategory: 'Yellow Card',
    author: 'Yellow Card Desk',
    publishedAt: '2025-11-29T17:00:00Z',
    imageUrl: img23,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 34567,
    tags: [
      'fake news',
      'misinformation',
      'social media',
      'political figures',
      'journalists',
      'Bangladesh politics',
      'fact-checking',
      'Jamaat-e-Islami',
      'BNP',
      'NCP',
    ],
  },
  {
    id: '24',
    title:
      'Bangladesh Media at a Crossroads: Key Insights from the Media Reform Commission Report',
    slug: 'bangladesh-media-reform-commission-report-insights',
    excerpt:
      'A landmark national survey and the Media Reform Commission reveal that 68% of Bangladeshis demand independent media free from political and corporate influence, while exposing deep ownership concentration, outdated laws, financial crisis, and political interference crippling the press.',
    content:
      'The July mass uprising exposed deep cracks in Bangladesh’s media landscape. In response, the Media Reform Commission (MRC) conducted the country’s first-ever national survey on media consumption through the Bangladesh Bureau of Statistics in January–February 2025.\n\n' +
      'The findings are stark: 68% of citizens want fully independent media, and 60% demand impartial journalism that prioritises public interest over sensationalism. Yet 38% believe the current media lacks independence, with 79% blaming political interference, 72% government pressure, and 50% influential individuals.\n\n' +
      'The MRC report diagnoses systemic failures and proposes sweeping reforms:\n\n' +
      '• Ownership Crisis: Most media outlets are controlled by business conglomerates with political ties. The Commission recommends public listing of mid-to-large media houses, caps on family shareholding, and exploration of a “One House, One Media” policy to restore diversity and editorial independence.\n\n' +
      '• Legal Overhaul: Colonial-era laws (Penal Code, Official Secrets Act, Contempt of Court Act) and the Cyber Security Act continue to stifle press freedom. The MRC has drafted a Protection of Journalism Ordinance and calls for their immediate repeal or amendment.\n\n' +
      '• Independent Regulation: Merge the Press Council and proposed Broadcast Commission into a fully autonomous Bangladesh Media Commission, funded partly by industry contributions to ensure freedom from government control.\n\n' +
      '• Financial Sustainability: No media house is currently profitable. The report proposes a standard entry-level journalist salary equivalent to Grade 9 government scale, housing allowances, pensions, and the creation of a national media training and research institute.\n\n' +
      '• Public Service Broadcasting: Transform state-owned BTV, Bangladesh Betar, and BSS into a genuinely independent National Broadcasting Corporation with diversified funding, including a possible TV licence fee.\n\n' +
      'The MRC warns that without urgent implementation of these reforms—legal, structural, financial, and professional—Bangladesh’s media will remain captive to political and corporate interests rather than serving democracy and the public.\n\n' +
      'For journalists and citizens alike, the report is both a diagnosis of a broken system and a roadmap toward a truly free, responsible, and sustainable press.',
    category: 'Research',
    subcategory: 'Media',
    author: 'Rashed Shahriar',
    publishedAt: '2025-11-29T10:30:00Z',
    imageUrl: img24,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 27891,
    tags: [
      'Media Reform Commission',
      'press freedom',
      'media ownership',
      'journalist salary',
      'Bangladesh media',
      'political interference',
      'Cyber Security Act',
      'public service broadcasting',
    ],
  },
  {
    id: '25',
    title:
      'Lessons from the Media Reform Commission: A Historic Opportunity for Press Freedom in Bangladesh',
    slug: 'lessons-media-reform-commission-press-freedom-bangladesh',
    excerpt:
      'Established after the July–August 2024 uprising that ended 15 years of authoritarian rule, the Media Reform Commission has delivered a landmark roadmap to transform Bangladesh’s media from a tool of the powerful into a true pillar of democracy.',
    content:
      'Bangladesh’s media landscape has reached a historic turning point. The student-led July–August 2024 uprising not only toppled an authoritarian regime but also exposed the deep complicity of large sections of the media in suppressing truth. Five journalists paid with their lives; thousands more bear physical and emotional scars.\n\n' +
      'In response, the interim government formed the Media Reform Commission (MRC) on November 18, 2024—the first serious attempt in decades to rebuild the press as an independent institution. Working within a tight 120-day deadline, the MRC has produced what many are calling the most comprehensive diagnosis and prescription for Bangladesh’s ailing media ecosystem.\n\n' +
      'From just a dozen newspapers in Dhaka in 1982 to over 3,270 publications, 53 private TV channels, 28 FM radios, and thousands of online portals today, the media has grown explosively—yet remains shackled by political interference, opaque ownership, financial distress, and repressive laws.\n\n' +
      'Key findings and recommendations:\n\n' +
      '• Opaque Ownership: Media investors face no obligation to disclose capital sources, allowing political and business elites to wield undue influence. The MRC calls for mandatory transparency and limits on cross-ownership.\n\n' +
      '• Financial Crisis: Declining circulation and advertising revenue threaten editorial independence. The Commission insists news is a public good and proposes sustainable business models and minimum wage standards for journalists.\n\n' +
      '• Legal Shackles: Colonial-era laws and the Cyber Security Act continue to intimidate journalists. Comprehensive legal reform and a new Protection of Journalism Ordinance are urgently needed.\n\n' +
      '• Accountability Without Control: The MRC advocates replacing government oversight with a strong, independent self-regulatory body funded by the industry itself.\n\n' +
      '• Public Voice: A nationwide survey of over 45,000 citizens and more than 45 stakeholder consultations shaped the recommendations, ensuring the reforms reflect what people actually want from their media.\n\n' +
      'The MRC report is more than a technical document—it is a moral and political manifesto born from the blood and sacrifice of the 2024 uprising. It reminds us that a free press is not a luxury but the oxygen of democracy.\n\n' +
      'Bangladesh now has a rare window. If the interim government and future administrations act decisively on these recommendations, the country can finally build a media that belongs to the people—not to politicians, corporations, or vested interests.\n\n' +
      'The martyrs of July did not die for another cycle of controlled media. They died for the right to truth. It is time to honour that sacrifice.',
    category: 'Research',
    subcategory: 'Media',
    author: 'Rashed Shahriar',
    publishedAt: '2025-11-29T14:00:00Z',
    imageUrl: img25,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 31245,
    tags: [
      'Media Reform Commission',
      'press freedom',
      'July uprising',
      'media ownership',
      'journalist protection',
      'Bangladesh media',
      'democracy',
      'legal reform',
    ],
  },
  {
    id: '26',
    title: 'Bangladesh Media: A Struggle for Freedom Across Decades',
    slug: 'bangladesh-media-struggle-freedom-history-reform-commission',
    excerpt:
      'From post-independence euphoria to BAKSAL’s suffocation, military “press advice,” and decades of political harassment, Bangladesh’s media has never truly been free. The Media Reform Commission’s new report traces this turbulent history and shows why today’s historic window must not be wasted.',
    content:
      '“The newspapers are the mirror of society,” goes the old adage. Yet in Bangladesh, the media has long mirrored not just society but the very nature of power—shifting between fleeting democracy, authoritarian rule, and military dominance.\n\n' +
      'After independence in 1971, the press tasted freedom for the first time. Silenced newspapers under Pakistani rule resumed publication, and journalists like Nirmal Sen fearlessly criticised the new government. But the honeymoon was short-lived.\n\n' +
      'By the mid-1970s, Sheikh Mujibur Rahman’s BAKSAL regime shut down dozens of newspapers, jailed editors, and left only four government-controlled dailies. As the International Press Institute noted, press freedom died within three years of independence.\n\n' +
      'The coups of 1975 brought military rulers Ziaur Rahman and later Ershad. Newspapers regained some space, but lived under the shadow of “press advice”—direct government directives on what could and could not be published. Outspoken papers like Jaijaidin and Bichinta were forced to close; editors went into exile.\n\n' +
      'The fall of Ershad in 1990 and the 1991 election sparked hope. Private television emerged—Ekushey TV, ATN Bangla, Channel I—and foreign broadcasters were allowed limited access. Yet successive Awami League and BNP governments continued the old habits: closures, arrests, and murders of journalists who exposed corruption or political violence.\n\n' +
      'Today, Bangladesh has over 3,270 registered publications, 53 private TV channels, 28 FM radios, and thousands of online portals—an explosive growth that masks a bitter reality: audiences still lack impartial, credible news.\n\n' +
      'The Media Reform Commission (MRC), formed after the 2024 student-led uprising, surveyed the public and found:\n\n' +
      '• 68% want fully independent media\n' +
      '• 60% demand unbiased reporting\n' +
      '• 38% believe the media is not independent, with 79% blaming political interference and 72% government pressure\n\n' +
      'The MRC identifies the core problems: opaque ownership, concentration of media houses in the hands of political-business elites, financial distress, colonial-era repressive laws, and lack of journalist protection.\n\n' +
      'Its solutions are bold: legal overhaul, mandatory ownership transparency, public listing of large media houses, minimum wage and benefits for journalists, an independent self-regulatory body, and treating news as a public service rather than pure commerce.\n\n' +
      'Bangladesh’s media history is one of hope repeatedly crushed by power. From 1971’s brief euphoria to BAKSAL, military rule, and the conditional freedoms of the last three decades, journalists have paid with exile, imprisonment, and their lives.\n\n' +
      'The sacrifices of the July–August 2024 uprising—where five journalists were killed—have opened a rare window. The MRC report is not just a diagnosis; it is a roadmap. If implemented, it can finally transform Bangladesh’s media from a tool of the powerful into a true pillar of democracy—one that reflects the people, not their rulers.',
    category: 'Research',
    subcategory: 'Media',
    author: 'Rashed Shahriar',
    publishedAt: '2025-11-29T19:00:00Z',
    imageUrl: img26,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 29874,
    tags: [
      'Media Reform Commission',
      'press freedom',
      'Bangladesh media history',
      'BAKSAL',
      'political interference',
      'journalist safety',
      'July uprising',
      'media ownership',
    ],
  },
  {
    id: '27',
    title:
      'Bangladesh Media Under Hasina: Pluralism in Name, Loyalty in Practice',
    slug: 'bangladesh-media-hasina-pluralism-loyalty-awami-league',
    excerpt:
      'Over 3,000 newspapers and dozens of TV channels flourished under Sheikh Hasina’s 15-year rule, yet the Media Reform Commission reveals how licenses, ads, lawsuits, and violence turned most outlets into government mouthpieces while silencing dissent.',
    content:
      'In Bangladesh today, media pluralism has become a numerical statistic rather than a reflection of diverse opinions. While the country boasts over 1,200 daily newspapers in Dhaka alone, more than 3,000 nationwide, over thirty television channels, and thousands of online portals, genuine diversity of thought, dissent, and independent reporting remains elusive.\n\n' +
      'A recent analysis by the Media Reform Commission (MRC) paints a stark picture of the media landscape under the 15-year Awami League government led by Sheikh Hasina, revealing systemic threats to freedom of expression.\n\n' +
      'Key mechanisms of control:\n\n' +
      '• Licenses as political reward: Broadcasting and publication permits were routinely granted to individuals with little journalistic experience or capital in exchange for demonstrated loyalty. Many new TV channels became outright propaganda platforms.\n\n' +
      '• Weaponised law: Editors critical of the government faced hundreds of cases under the Digital Security Act, sedition, defamation, and contempt laws. Amar Desh editor Mahmudur Rahman spent over five years in prison and faced 124 cases; veterans like Shafik Rehman and Abul Asad endured repeated detention and abuse.\n\n' +
      '• Financial strangulation: Government advertisements—the lifeblood of many outlets—were allocated or withheld as punishment/reward. Access to official events and information was restricted.\n\n' +
      '• Direct intimidation: Formal and informal “press advice,” physical assaults, and occasional violence created a climate of fear and self-censorship.\n\n' +
      'Even mainstream outlets like Prothom Alo and The Daily Star faced dozens of lawsuits. During the July–August 2024 mass uprising, pro-government media systematically spread false narratives, branding student protesters as terrorists or opposition conspirators.\n\n' +
      'The 2014 National Broadcasting Policy demanding accuracy and impartiality was routinely ignored.\n\n' +
      'The MRC’s conclusion is damning: Bangladesh achieved an explosion in the number of media outlets, but pluralism existed only on paper. In practice, most platforms became instruments for consolidating authoritarian power rather than fostering accountability and debate.\n\n' +
      'The result was a media ecosystem where loyalty and flattery were rewarded, investigative journalism was marginalised, and the public was starved of unbiased information.\n\n' +
      'Bangladesh now stands at a historic crossroads. Without sweeping legal reform, transparent licensing, financial independence, and genuine self-regulation, the media risks remaining a tool of whoever holds power—rather than the fourth pillar it is meant to be.',
    category: 'Research',
    subcategory: 'Media',
    author: 'Rashed Shahriar',
    publishedAt: '2025-11-29T21:00:00Z',
    imageUrl: img27,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 36782,
    tags: [
      'Sheikh Hasina',
      'Awami League',
      'Media Reform Commission',
      'press freedom',
      'Digital Security Act',
      'media ownership',
      'propaganda',
      'July uprising',
      'Mahmudur Rahman',
    ],
  },
  {
    id: '28',
    title: 'Bangladesh Media After Hasina: A Turbulent Transition',
    slug: 'bangladesh-media-after-hasina-turbulent-transition',
    excerpt:
      "The August 5, 2024 fall of Sheikh Hasina's Awami League regime triggered a seismic overhaul in Bangladesh's media, with over 150 journalists fired, pro-government editors arrested, and opposition-aligned figures taking key roles amid debates over accountability and a potential new era of partisanship.",
    content:
      'The fall of the Awami League government on August 5, 2024 marked a dramatic turning point for Bangladesh’s media industry. In the weeks and months that followed, the landscape of newsrooms, television channels, and online platforms underwent sweeping changes, reflecting both political shifts and the lingering effects of 15 years of authoritarian-aligned media practices.\n\n' +
      'According to recent findings from the Media Reform Commission (MRC), many high-ranking editors and journalists who were closely aligned with the previous government faced threats, arrest, or dismissal. Some went into hiding amid fears for their safety. Notable figures—including Mozammel Babu of 71 TV, Shyamal Dutta of Bhorer Kagoj, and Farzana Rupa—were arrested while allegedly attempting to leave the country. Some were later named in murder cases, while others were accused of crossing borders illegally.\n\n' +
      'The central allegation against these journalists is that they acted more like political operatives than independent reporters, using their platforms to suppress democratic movements, propagate misinformation, and justify state violence. Their close collaboration with the previous regime fueled widespread public resentment, making them primary targets during the mass uprising.\n\n' +
      'Post-August 5, leadership changes swept through television channels, newspapers, and online portals. Over 150 journalists were fired in just one year from TV channels alone, many due to their perceived loyalty to the Awami League. Newspapers and channels replaced management and editorial staff with journalists known for their BNP or opposition affiliations, reversing the pro-government tilt of the previous regime.\n\n' +
      'Some notable transitions included Ekattor TV, Nagorik TV, East West Media Group, Kaler Kantho, Bangladesh Pratidin, ATN Bangla, ATN News, Independent TV, DBC TV, RTV, Boishakhi TV, Asian TV, Desh TV, Gazi TV, Somoy TV, Mohona TV, Ekushey TV, and Global TV, where BNP or Jamaat-minded journalists have taken over key positions.\n\n' +
      'Even newspapers such as Dainik Samakal, Dainik Jugantor, Dainik Ittefaq, Bhorer Akash, Alokito Bangladesh, and news portals like Sarabangla.net experienced major editorial changes. These shifts represent one of the most comprehensive overhauls of media leadership in Bangladesh’s history.\n\n' +
      'The MRC notes that many of the journalists and media managers removed were widely perceived as enablers of the previous authoritarian regime, contributing to public distrust of mainstream media. Their removal has sparked debates over justice, accountability, and due process, particularly regarding high-profile arrests and murder charges against former media figures.\n\n' +
      'While some observers have criticized the interim government’s legal approach as excessive, others see these actions as part of a reckoning for a media industry that had long prioritized political loyalty over journalistic integrity. The freezing of bank accounts and suspension of press accreditations further underscores the deep restructuring underway.\n\n' +
      'Despite the widespread leadership changes, the post-Hasina media landscape remains volatile and politically charged. Many outlets reportedly practice self-censorship amid political uncertainty, while accusations of indirect government interference continue. The industry is still grappling with questions of ethics, professional independence, and credibility.\n\n' +
      'As Bangladesh navigates this transitional period, the media’s role as a pillar of democracy is under scrutiny. The public, journalists, and civil society alike are closely watching whether the newly restructured outlets can rise above political partisanship, uphold journalistic standards, and serve as platforms for truthful reporting and accountability.\n\n' +
      'The post-Hasina era may well be the most significant moment of recalibration for Bangladesh’s media since independence, with the potential to either restore public trust or entrench new patterns of political alignment—depending on how journalists and media owners navigate this period of uncertainty.',
    category: 'Research',
    subcategory: 'Media',
    author: 'Rashed Shahriar',
    publishedAt: '2025-11-29T22:00:00Z',
    imageUrl: img28,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 41256,
    tags: [
      'post-Hasina media',
      'Media Reform Commission',
      'journalist arrests',
      'media overhaul',
      'Awami League',
      'BNP',
      'Jamaat',
      'press freedom',
      'August 5 uprising',
    ],
  },
  {
    id: '29',
    title: 'Bangladesh: A Tapestry of Culture, Tradition, and Resilience',
    slug: 'bangladesh-culture-tradition-resilience',
    excerpt:
      'From the soul-stirring Baul songs and jamdani weaves to the joyous chaos of Pohela Boishakh and the quiet pride of the Language Movement, Bangladesh’s vibrant culture is a living celebration of identity, creativity, and unbreakable spirit.',
    content:
      'Bangladesh is a land where history, tradition, and modernity intertwine in colorful harmony. From the bustling streets of Dhaka to the serene tea gardens of Sylhet, the country’s culture is a vibrant mosaic of music, art, literature, festivals, and daily rituals that reflect both its rich heritage and resilient spirit.\n\n' +
      'Language and Literature: The Soul of a Nation\n' +
      'Bengali—the mother tongue of over 160 million people—is far more than a language; it is the heartbeat of national identity. The Language Movement of 1952, which cost many lives but won global recognition for Bengali, remains the emotional cornerstone of Bangladeshi pride. Writers like Rabindranath Tagore, Kazi Nazrul Islam, and Humayun Ahmed continue to inspire, while folklore, rural tales, and songs preserve centuries-old stories of love, courage, and justice.\n\n' +
      'Festivals and Celebrations: A Nation in Rhythm\n' +
      'Pohela Boishakh ushers in the Bengali New Year with mangal shobhajatra processions, vibrant attire, panta-ilish feasts, and the thunder of dhak drums. Eid-ul-Fitr, Durga Puja, Buddha Purnima, and Christmas are celebrated with equal fervor, showcasing Bangladesh’s pluralistic harmony. Village fairs, river festivals, and harvest melas add layers of local color and community bonding.\n\n' +
      'Music, Dance, and Performing Arts\n' +
      'Baul minstrels wander with their ektara, singing timeless spiritual truths. Lalon’s philosophy still echoes across the Padma. Classical ragas mingle with folk strains of Bhatiali and Bhawaiya, while modern bands and pop artists tackle contemporary dreams and struggles. Jatra theatre, Manipuri and Kathak dance, and street performances keep storytelling traditions alive.\n\n' +
      'Art and Handicrafts: Tradition in Every Thread\n' +
      'The delicate jamdani saree, intricate nakshi kantha quilts, shimmering pottery, and terracotta temples of Kantaji are not just crafts—they are heirlooms of skill and history. Artisans in villages and urban cooperatives breathe new life into ancient techniques, proving that tradition can thrive alongside innovation.\n\n' +
      'Cuisine: Flavor, Identity, and Tradition\n' +
      'Rice and fish reign supreme, joined by fiery curries, hilsa feasts, and aromatic biryanis. Street corners burst with fuchka, chotpoti, and jhalmuri, while sweet shops overflow with roshogolla, sandesh, and mishti doi. Every meal is a celebration of rivers, seasons, and centuries-old recipes passed down through families.\n\n' +
      'Resilience in Culture\n' +
      'Born from the Liberation War of 1971 and tempered by floods, cyclones, and political upheavals, Bangladeshi culture is inseparable from resilience. Folk songs once carried messages of resistance; today they remind generations of the price of freedom and the strength of unity.\n\n' +
      'A Living Culture\n' +
      'In modern Dhaka and Chittagong, film festivals, art biennales, book fairs, and digital creators are pushing boundaries. Yet whether in a riverside village or a city rooftop concert, the essence remains the same: a joyful, colorful, deeply human celebration of life.\n\n' +
      'Bangladesh’s cultural tapestry is a living testament to its people’s creativity, endurance, and boundless spirit—a nation that honors its past while weaving an ever-brighter future.',
    category: 'Culture',
    subcategory: 'Culture',
    author: 'Sohana Chowdhury',
    publishedAt: '2025-11-29T11:00:00Z',
    imageUrl: img29,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 23417,
    tags: [
      'Bangladesh culture',
      'Pohela Boishakh',
      'Bengali language',
      'jamdani',
      'Baul',
      'cuisine',
      'heritage',
      'resilience',
      'festivals',
    ],
  },
  {
    id: '30',
    title: 'Ha-du-du: the Sprint, the Breath, the Chant',
    slug: 'ha-du-du-kabaddi-bangladesh-national-sport-heritage',
    excerpt:
      'Once the heartbeat of every rural courtyard and festival ground, Ha-du-du — Bangladesh’s national sport — is a raw celebration of breath, courage, and community. But concrete, smartphones, and modern distractions are slowly silencing the iconic chant.',
    content:
      'In the villages of rural Bengal, long before floodlights or concrete stadiums, there was only bare earth, bare feet, and one breath held in defiance: Ha‑du‑du.\n\n' +
      'Officially declared Bangladesh’s national sport in 1972, Ha‑du‑du (known globally as Kabaddi) is older than recorded history. Some trace its roots to Vedic times, others to tribal survival games. What is certain is that for centuries it has been the ultimate test of strength, strategy, and lung power in this delta land.\n\n' +
      'The rules are beautifully brutal: a lone raider crosses the midline, must tag defenders and return home — all while chanting “ha‑du‑du… ha‑du‑du…” without taking a breath. One gasp and he’s out. Defenders link arms, anticipate, lunge. It is wrestling, sprinting, and breath-control yoga rolled into one chaotic, thrilling dance.\n\n' +
      'No bat, no ball, no shoes required — just open ground and fearless hearts. That is why Ha‑du‑du once echoed in every village courtyard during Pohela Boishakh, harvest fairs, and moonlit winter nights. Children learned courage here. Young men proved themselves. Elders wagered rice, goats, or radios on the outcome.\n\n' +
      'After Liberation in 1971, elevating this earthy village game to national sport was a deliberate act of identity — a proud rejection of colonial cricket and football, a celebration of something raw, rural, and undeniably Bengali.\n\n' +
      'Yet today the chant is fading.\n\n' +
      'Concrete playgrounds have replaced mud courts. Open fields have become housing projects. Children glued to TikTok and Free Fire no longer know the thrill of raiding on one breath. Urban parents see only dust and risk. Professional infrastructure remains pitiful — few proper mats, fewer coaches, almost no funding outside sporadic government tournaments.\n\n' +
      'In cities, Ha‑du‑du survives mostly as a nostalgic demonstration during Boishakh rallies or Independence Day events. In many villages, even the elders say: “We haven’t had a proper match in years.”\n\n' +
      'But lose Ha‑du‑du and we lose more than a game.\n\n' +
      'We lose the sound of barefoot thunder on red earth. We lose the lesson that courage can be measured in a single held breath. We lose a living link to the soil, sweat, and collective joy of rural Bengal.\n\n' +
      'Ha‑du‑du is not just sport. It is memory. It is identity. It is the stubborn heartbeat of a people who have always refused to exhale in the face of hardship.\n\n' +
      'It’s time to clear the dust, draw the line again, and let the chant rise once more: Ha‑du‑du… ha‑du‑du…',
    category: 'Sports',
    subcategory: 'Culture',
    author: 'Sabbir Hossain',
    publishedAt: '2025-11-29T13:00:00Z',
    imageUrl: img30,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 18944,
    tags: [
      'Ha-du-du',
      'Kabaddi',
      'national sport',
      'Bangladesh culture',
      'rural heritage',
      'village games',
      'cultural preservation',
      'youth sports',
    ],
  },
  {
    id: '31',
    title: 'Tareque Masud: The Storyteller Who Carved Bangladesh in Celluloid',
    slug: 'tareque-masud-filmmaker-legacy-bangladesh-cinema',
    excerpt:
      'Fourteen years after his tragic death, Tareque Masud remains Bangladesh’s most important cinematic voice — the man who took village projectors to remote corners, made madrasa boys human on screen, and turned the songs of 1971 into a nation’s collective memory.',
    content:
      'On August 13, 2011, a microbus crash on the Dhaka-Aricha highway stole two irreplaceable lives: Tareque Masud and Mishuk Munier. Bangladesh did not just lose a filmmaker and a cinematographer; it lost one of its finest chroniclers of memory, conscience, and quiet rebellion.\n\n' +
      'Born in 1956 in Faridpur, Masud grew up between the rigid walls of a madrasa and the turbulence of a nation hurtling toward liberation. Those early years — faith on one side, politics on the other — would shape every frame he ever shot.\n\n' +
      'His breakthrough came with Muktir Gaan (1995), a documentary stitched together from forgotten 8mm footage of cultural activists singing through the 1971 war. Overnight, the songs of farmers and freedom fighters became the soundtrack of a generation. Muktir Kotha (1999) took the film back to villages, letting ordinary people watch themselves on screen and speak their truths — a radical act of democratising history.\n\n' +
      'Then came Matir Moina (The Clay Bird, 2002). Set in a madrasa on the eve of the Liberation War, the semi-autobiographical film treated faith, doubt, and fundamentalism with tenderness instead of caricature. It became the first Bangladeshi film submitted to the Oscars and won the FIPRESCI Prize at Cannes — proof that a deeply local story could move the world.\n\n' +
      'With his American wife Catherine Masud, Tareque turned their production house Audiovision into a movement. They loaded projectors onto vans and became “Cinema Feriwallas,” screening films in remote villages where electricity was scarce and cinema was a miracle. For thousands, their first encounter with moving images was a Tareque Masud film.\n\n' +
      'He was working on Kagojer Phul — a story about identity and partition — when the accident happened. The film remains unfinished, a permanent reminder of what Bangladesh still owes him.\n\n' +
      'Today, when commercial cinema and TikTok trends dominate attention, Masud’s work feels more urgent than ever. His films refuse easy heroes and villains. They ask uncomfortable questions with gentle insistence. They remind us that cinema can be memory, conscience, and resistance all at once.\n\n' +
      'Through the Tareque Masud Memorial Trust, Catherine continues the mission — preserving prints, screening his films in schools, keeping the projector vans alive.\n\n' +
      'Tareque Masud did not just make films about Bangladesh. He carved Bangladesh into celluloid — its silences, its songs, its stubborn humanity. As long as a single reel turns in a village courtyard or a classroom projector hums to life, his stories will keep breathing.',
    category: 'Cinema',
    subcategory: 'Culture',
    author: 'Rushna Ali',
    publishedAt: '2025-11-29T16:00:00Z',
    imageUrl: img31,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 26789,
    tags: [
      'Tareque Masud',
      'Bangladesh cinema',
      'Matir Moina',
      'Muktir Gaan',
      '1971 Liberation War',
      'documentary',
      'film legacy',
      'Cinema Feriwalla',
      'Catherine Masud',
    ],
  },
  {
    id: '32',
    title:
      'Pritilata Waddedar: The Fearless Warrior of Bengal’s Freedom Struggle',
    slug: 'pritilata-waddedar-revolutionary-chittagong-women-freedom-fighter',
    excerpt:
      'At just 21, Pritilata Waddedar led armed revolutionaries against the British, attacked the racist European Club in Chittagong, and chose cyanide over capture — becoming one of Bengal’s most daring and unforgettable icons of resistance.',
    content:
      'In the dark of September 24, 1932, a young woman in khaki shorts and shirt led a team of revolutionaries toward the Pahartali European Club in Chittagong. The signboard outside read “Dogs and Indians not allowed.” That night, Pritilata Waddedar made sure the British would never forget the insult.\n\n' +
      'Born on May 5, 1911, into a progressive family in Chittagong, Pritilata was educated at a time when most girls were kept at home. She topped the matriculation examination in her district, graduated from Bethune College in Calcutta, and became a headmistress — but books were never enough for her.\n\n' +
      'Under the mentorship of Masterda Surya Sen, she joined the revolutionary Jugantar group. She learned to handle revolvers and rifles, mastered bomb-making, and trained alongside men who initially hesitated to accept a woman in their ranks. Pritilata silenced doubts with action.\n\n' +
      'On the night of the raid, disguised as a man, she commanded fifteen revolutionaries. They stormed the club, hurled bombs, and opened fire. Though the attack was more symbolic than destructive, its message was deafening: no corner of the Raj was safe.\n\n' +
      'Surrounded by British troops during the retreat, Pritilata refused capture. She swallowed potassium cyanide and died on the spot, just 21 years old. In her pocket was found a final leaflet addressed to the nation: “We are not afraid of death… Our sacrifice will awaken the people.”\n\n' +
      'The British banned her photograph. Her funeral procession in Chittagong drew thousands. Newspapers across Bengal mourned the “girl in khaki” who had shattered every stereotype.\n\n' +
      'Pritilata was not the only woman revolutionary — Kalpana Dutta, Bina Das, and Preetilata’s own comrades fought alongside her — but she became the blazing symbol of feminine courage in the armed struggle.\n\n' +
      'Today, schools, dormitories, and streets across Bangladesh bear her name. Her portrait hangs in university halls. Every year on September 24, young women lay flowers at the spot where she fell.\n\n' +
      'Pritilata Waddedar did not live to see independence, but she proved that freedom is not granted — it is seized, often by the youngest, the boldest, and sometimes by a woman who refused to stay in the shadows.\n\n' +
      'Her life was short. Her legend is eternal.',
    category: 'History',
    subcategory: 'Culture',
    author: 'Rushna Ali',
    publishedAt: '2025-11-29T18:00:00Z',
    imageUrl: img32,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 31289,
    tags: [
      'Pritilata Waddedar',
      'Chittagong',
      'revolutionary',
      'women freedom fighters',
      'Surya Sen',
      'Pahartali European Club',
      'anti-colonial struggle',
      'Bangladesh history',
      'Jugantar',
    ],
  },
  {
    id: '33',
    title: 'Razia: A Flower Seller and the Invisible Backbone of Dhaka',
    slug: 'razia-flower-seller-moghbazar-street-child-dhaka',
    excerpt:
      'Every morning in Moghbazar, twelve-year-old Razia balances a basket of marigolds on her head and sells hope one bouquet at a time. Her story is the story of thousands of street children whose childhood has been traded for survival.',
    content:
      'She appears at the traffic signal just as the morning sun turns the smog golden. A tiny girl in a faded frock, basket balanced perfectly on her head, voice soft but persistent: “Ful neben, apa? Ekdom taaza ful…”\n\n' +
      'Razia is twelve. She should be learning multiplication tables or playing gollachhut during tiffin break. Instead, she is the sole breadwinner for herself and two younger siblings after their parents disappeared into the city’s underbelly of illness and poverty.\n\n' +
      'By 6 a.m. she is at the wholesale flower market in Shahbag, bargaining with hardened middlemen twice her size. By 7:30 she is in Moghbazar, weaving between buses and CNGs, selling marigolds, roses, and tuberoses to office-goers buy for temples, lovers, or hospital visits.\n\n' +
      'A good day earns her 300–400 taka. A bad day barely covers rice and dal. Some customers haggle over five taka; others silently slip an extra hundred into her palm. She remembers every face.\n\n' +
      'What hurts most is not the heat or the hunger; it is the invisibility. To most of Dhaka, she is background noise, part of the city’s furniture like the stray dogs or the flickering streetlights. Yet without children like Razia, the city’s temples would have no offerings, its graves no flowers, its romances no tokens.\n\n' +
      'She dreams in secret. “I want to wear a school uniform one day,” she whispers while tying a marigold garland. “White and navy blue, with a badge on the pocket.” The sentence ends with a shy laugh, as if the dream itself is too heavy to speak aloud.\n\n' +
      'NGOs have reached out — BRAC, Dhaka Ahsania Mission, Save the Children run drop-in centres and night schools — but the pull of daily wages is stronger than the promise of distant certificates. One missed day of sales can mean no dinner.\n\n' +
      'Razia is not asking for pity. She is asking for recognition: that her small hands keep parts of this city fragrant and alive; that her childhood has been sacrificed so the rest of us can rush to work without guilt; that her dignity, even in tatters, remains intact.\n\n' +
      'The next time you buy flowers at a traffic signal, look — really look — at the child selling them. Behind the practiced smile and quick fingers is a girl who has never known recess, who measures success in kilograms of rice, who still believes school is possible if someone, anyone, will just make it possible.\n\n' +
      'Razia is not just selling flowers. She is holding up a mirror to Dhaka, asking quietly but persistently:\n\n' +
      'When will you finally see me?',
    category: 'Views',
    subcategory: 'Society',
    author: 'Akib Al Rashid',
    publishedAt: '2025-11-29T20:00:00Z',
    imageUrl: img33,
    isBreaking: false,
    isFeatured: true,
    isEditorPick: true,
    views: 44567,
    tags: [
      'street children',
      'child labour',
      'Dhaka',
      'Moghbazar',
      'flower seller',
      'poverty',
      'human story',
      'child rights',
      'urban Bangladesh',
    ],
  },
];

export const breakingNews = [
  'Government approves nationwide smart-traffic system rollout to reduce congestion in major cities',
  'Bangladesh Bank launches new digital payment security framework to curb online fraud',
  'Metro Rail authorities announce expansion plan connecting Uttara to Gabtoli by 2028',
  'Tigers clinch dramatic T20 win against Pakistan with last-over finish',
  'CID uncovers large cybercrime syndicate operating across three districts in coordinated raids',
];

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return sampleNews.filter(
    article => article.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedArticles = (): NewsArticle[] => {
  return sampleNews.filter(article => article.isFeatured);
};

export const getEditorPicks = (): NewsArticle[] => {
  return sampleNews.filter(article => article.isEditorPick);
};

export const getBreakingArticles = (): NewsArticle[] => {
  return sampleNews.filter(article => article.isBreaking);
};

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return sampleNews.find(article => article.slug === slug);
};

export const getTrendingArticles = (): NewsArticle[] => {
  return [...sampleNews].sort((a, b) => b.views - a.views).slice(0, 5);
};
