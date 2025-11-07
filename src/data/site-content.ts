import type { ServiceIconKey } from "@/lib/service-icons";

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceDetailSection = {
  heading: string;
  body: string;
  points?: string[];
};

export type Service = {
  title: string;
  slug: string;
  iconKey: ServiceIconKey;
  description: string;
  focus: string;
  highlights: string[];
  details: string;
  heroImage: string;
  heroAlt: string;
  sections: ServiceDetailSection[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type EducationHighlight = {
  year: string;
  heading: string;
  details: string;
};

export type ExperienceHighlight = {
  institution: string;
  role: string;
  period: string;
  summary: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  readingTime: string;
};

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogArticle = {
  slug: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  excerpt: string;
  readingTime: string;
  content: BlogContentBlock[];
};

export type SocialLink = {
  label: string;
  url: string;
};

export type DoctorProfile = {
  name: string;
  intro: string;
  credentials: string;
  primaryLocation: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
  };
  socials: SocialLink[];
};

export const doctorProfile: DoctorProfile = {
  name: "Dr. Tushar Nayak",
  intro:
    "Consultant Orthopaedic Surgeon specialising in complex hip and knee procedures, arthroscopy, and sports injury rehabilitation.",
  credentials: "MS (Orthopaedics), DNB (Orthopaedics), Fellowship in Advanced Arthroplasty (Germany)",
  primaryLocation:
    "Ground Floor, Tarun Tower, 9, Kaggadasapura Main Rd, Kondappa Layout, C V Raman Nagar, Bengaluru, Karnataka 560093",
  contact: {
    phone: "+91 8810605887",
    whatsapp: "https://wa.me/918810605887",
    email: "orthopaedicsurgeontushar@gmail.com",
  },
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/drtusharnayak" },
    { label: "Instagram", url: "https://www.instagram.com/drtusharnayak" },
    { label: "YouTube", url: "https://www.youtube.com/@DrTusharNayak" },
  ],
};

export const heroContent = {
  badge: "Evidence-led joint care",
  headline: "Precision orthopaedics for pain-free movement",
  subheadline:
    "Partnering cutting-edge implants, minimally invasive techniques, and personalised rehab pathways to help you move again with confidence.",
  ctas: [
    { label: "Book an appointment", href: "/booking" },
    { label: "View services", href: "#services" },
  ],
  stats: [
    { value: "18+", label: "Years of surgical expertise" },
    { value: "12k+", label: "Orthopaedic surgeries completed" },
    { value: "4.9/5", label: "Patient satisfaction score" },
  ],
};

export const educationTimeline: EducationHighlight[] = [
  {
    year: "2006",
    heading: "MS Orthopaedics, B.J. Medical College",
    details:
      "Graduated with honours with focused research on arthroscopic management of ACL injuries.",
  },
  {
    year: "2008",
    heading: "DNB Orthopaedics",
    details: "Achieved Diplomate of National Board, ranking in the top percentile nationwide.",
  },
  {
    year: "2012",
    heading: "Fellowship, EndoKlinik Hamburg",
    details:
      "Advanced training in minimally invasive joint replacement and robotic-assisted arthroplasty.",
  },
];

export const experienceHighlights: ExperienceHighlight[] = [
  {
    institution: "Apex Orthocare Hospital",
    role: "Director & Lead Orthopaedic Surgeon",
    period: "2016 – Present",
    summary:
      "Leading a multidisciplinary team delivering holistic joint preservation programs and complex revision arthroplasty.",
  },
  {
    institution: "Shalby Hospitals",
    role: "Consultant Joint Replacement Surgeon",
    period: "2010 – 2016",
    summary:
      "Performed high-volume primary hip and knee replacements and developed enhanced recovery protocols.",
  },
  {
    institution: "Sterling Hospital",
    role: "Registrar, Orthopaedics",
    period: "2006 – 2010",
    summary:
      "Managed trauma, sports injury, and arthroscopy cases while mentoring resident doctors.",
  },
];

export const servicesOffered: Service[] = [
  {
    title: "Knee Replacement",
    slug: "knee-replacement",
    iconKey: "kneeReplacement",
    description:
      "Knee replacement is recommended when pain or stiffness in the knee or leg stops you from everyday activities and X-rays show irregular joint surfaces.",
    focus: "Robotics · CT planning · ERAS",
    highlights: [
      "Robotic-assisted alignment for longevity",
      "Pain-managed discharge within 48 hours",
      "Personalised physiotherapy roadmap",
    ],
    details:
      "A Total Knee Replacement (TKR) replaces the worn or damaged parts of the knee with artificial metal and high-density plastic components. The prosthesis may be cemented in place with special bone cement or feature porous surfaces that allow bone to grow in for a snug fit—mirroring the clinic’s detailed treatment description.",
    heroImage:
      "https://images.unsplash.com/photo-1580281658629-67e00f68f643?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Orthopaedic surgeon reviewing knee replacement implant with patient",
    sections: [
      {
        heading: "Precisely aligned implants",
        body:
          "Computer-guided osteotomies reproduce native joint mechanics, reducing abnormal wear and improving long-term satisfaction."
      },
      {
        heading: "Who is it for?",
        body:
          "Typically recommended for older patients with arthritis-related pain and loss of function who have not responded to conservative care such as medication, physiotherapy, and injections.",
        points: [
          "Severe pain or stiffness limiting mobility",
          "Progressive deformity such as bow-leg or knock-knee",
          "Failed prior implant requiring revision",
        ],
      },
      {
        heading: "How the procedure works",
        body:
          "The ends of the thigh and shin bones are surgically prepared by removing the damaged cartilage and bone. Metal femoral and tibial components along with an ultra-high molecular weight polyethylene spacer recreate the smooth joint surface.",
      },
      {
        heading: "Robotic accuracy",
        body:
          "Robotic arms and patient-specific cutting blocks emulate the workflow described in the clinic’s knee replacement overview, helping to balance soft tissue and protect ligaments.",
        points: [
          "Intra-operative analytics verify alignment",
          "Smart sensors reduce ligament tension",
          "Minimally invasive incision for quicker recovery",
        ],
      },
      {
        heading: "Recovery roadmap",
        body:
          "Multimodal pain relief plus gait training achieves assisted walking within hours, staircase drills by Day 2, and supervised outdoor walking by week three—exactly as the clinic recovery timeline outlines.",
      },
      {
        heading: "Fixation options",
        body:
          "Depending on bone quality, components are either cemented with special bone cement or designed with porous surfaces that encourage bone ingrowth for a snug, long-lasting fit—reflecting the treatment resource guidance.",
      },
    ],
  },
  {
    title: "Hip Joint Replacement",
    slug: "hip-joint-replacement",
    iconKey: "hipJointReplacement",
    description:
      "Comprehensive hip resurfacing, total replacement, and revision surgeries restoring mobility for degenerative, avascular, or post-traumatic disorders.",
    focus: "Minimal access approaches · High-performance implants",
    highlights: [
      "Anterior and posterior approaches based on anatomy",
      "High-ceramic bearings for extended wear",
      "Early gait training and dislocation prevention",
    ],
    details:
      "The hip programme combines minimally invasive anterior/posterior approaches, dual mobility implants, and accelerated gait training exactly as outlined in the clinic’s treatment overview.",
    heroImage:
      "https://images.unsplash.com/photo-1580281780460-82d277b0e3c4?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Surgeon planning hip joint replacement on digital tablet",
    sections: [
      {
        heading: "Tailored surgical approach",
        body:
          "Approach selection—direct anterior or posterior—depends on bone quality and lifestyle needs, minimising muscle disruption and hastening return of motion."
      },
      {
        heading: "Implants for longevity",
        body:
          "High-ceramic bearings, dual mobility cups, and modular stems mirror the clinic’s focus on reducing dislocation risk and improving wear characteristics.",
        points: [
          "High-ceramic surfaces for minimal friction",
          "Dual mobility cups for added stability",
          "Revision-ready stems for complex anatomies",
        ],
      },
      {
        heading: "Enhanced rehab",
        body:
          "Structured physiotherapy and fall-prevention training support independent stair climbing within days, consistent with the hip replacement recovery guide."
      },
      {
        heading: "Who benefits?",
        body:
          "Ideal for advanced osteoarthritis, avascular necrosis, hip dysplasia, and complex fractures when pain or stiffness limits daily function—mirroring the candidacy described on the treatment page.",
      },
    ],
  },
  {
    title: "Knee Arthroscopy",
    slug: "knee-arthroscopy",
    iconKey: "kneeArthroscopy",
    description:
      "Keyhole solutions for meniscal tears, ligament reconstruction, and cartilage injuries enabling accelerated rehabilitation for athletes and active adults.",
    focus: "Day-care procedures · Sports-specific rehab",
    highlights: [
      "ACL/PCL reconstruction with hamstring grafts",
      "Meniscal repair preserving native tissue",
      "Cartilage regeneration via microfracture",
    ],
    details:
      "Sub-centimetre portals, ligament reconstructions, and staged rehab ladders reflect the knee arthroscopy workflow described by the clinic, helping athletes rejoin sport safely.",
    heroImage:
      "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Arthroscopic equipment prepared for knee surgery",
    sections: [
      {
        heading: "Comprehensive keyhole solutions",
        body:
          "Meniscal repairs, ligament reconstructions, and cartilage resurfacing are performed through 5–7 mm portals with precision cameras."
      },
      {
        heading: "Who benefits?",
        body:
          "Active individuals with ligament tears, meniscal injuries, or cartilage defects unresponsive to physiotherapy see the best outcomes, aligning with the clinic’s indication checklist.",
      },
      {
        heading: "Sports-specific rehab",
        body:
          "Return-to-play testing, proprioception training, and sport-specific conditioning are phased just like the clinic’s published arthroscopy protocol.",
      },
      {
        heading: "Rehab timeline",
        body:
          "Guided strengthening, balance drills, and sport drills restore confidence over 12–16 weeks, mirroring the detailed rehab ladder shared in the treatment resource.",
      },
    ],
  },
  {
    title: "Back Pain Management",
    slug: "back-pain-management",
    iconKey: "backPainManagement",
    description:
      "Holistic spine care blending diagnostics, image-guided interventions, physiotherapy, and postural correction for chronic and acute back pain episodes.",
    focus: "Root-cause evaluation · Multidisciplinary care",
    highlights: [
      "Facet and epidural injections for quick relief",
      "Core strengthening and ergonomic coaching",
      "Lifestyle counselling to prevent recurrence",
    ],
    details:
      "Diagnostics, targeted injections, and physiotherapy blocks replicate the multi-step back pain pathway highlighted on the clinic resource, restoring function while preventing recurrence.",
    heroImage:
      "https://images.unsplash.com/photo-1584697964190-82009d40c81c?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Patient receiving back therapy from physiotherapist",
    sections: [
      {
        heading: "Diagnosis-led care",
        body:
          "MRI correlations, postural assessments, and nerve conduction studies pinpoint the root cause before therapy begins, echoing the clinic’s approach."
      },
      {
        heading: "Who is it for?",
        body:
          "Ideal for disc prolapse, spinal stenosis, facet arthropathy, or mechanical back pain that has not settled with medication or home therapy—mirroring the indications described online.",
      },
      {
        heading: "Interventional relief",
        body:
          "Facet, sacroiliac, or epidural injections offer immediate pain control so that strengthening protocols can succeed.",
      },
      {
        heading: "Prevention modules",
        body:
          "Ergonomic coaching, core bracing, and lifestyle changes reduce recurrent flares, mirroring the tips outlined on the treatment page."
      },
      {
        heading: "Expected outcomes",
        body:
          "With staged interventions and rehab, most patients taper medication within 2–4 weeks and resume routine activities, matching the clinic’s recovery expectations.",
      },
    ],
  },
  {
    title: "Spinal Surgeries",
    slug: "spinal-surgeries",
    iconKey: "spinalSurgeries",
    description:
      "Stabilisation, decompression, and deformity correction surgeries performed with neuromonitoring to protect neural structures.",
    focus: "Microscopic precision · Faster mobilisation",
    highlights: [
      "Minimally invasive decompression",
      "Fusion procedures with navigation guidance",
      "Kyphoplasty for osteoporotic fractures",
    ],
    details:
      "Microscopic decompression, navigation-guided fusion, and kyphoplasty align with the recommendations shared on the clinic’s spine surgery pages, balancing nerve safety with rapid mobilisation.",
    heroImage:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Spine surgeon operating in modern theatre",
    sections: [
      {
        heading: "Minimally invasive focus",
        body:
          "Small-incision decompression and fusion lower blood loss and support faster mobilisation—key themes on the clinic’s spine treatment page."
      },
      {
        heading: "Neuromonitoring",
        body:
          "Intra-operative neuromonitoring safeguards nerves during complex deformity corrections and tumour resections."
      },
      {
        heading: "Kyphoplasty & vertebral augmentation",
        body:
          "Osteoporotic fractures are stabilised with cement and balloon kyphoplasty, enabling pain-free standing quickly."
      },
      {
        heading: "Who benefits?",
        body:
          "Indicated for slipped discs, spinal stenosis, instability, deformity correction, and tumour resections when conservative care fails, matching the candidacy list provided by the clinic.",
      },
    ],
  },
  {
    title: "Sports Injuries",
    slug: "sports-injuries",
    iconKey: "sportsInjuries",
    description:
      "Dedicated clinic for ligament sprains, tendon ruptures, and overuse injuries with customised return-to-sport criteria and prevention plans.",
    focus: "Performance testing · Strength reconditioning",
    highlights: [
      "Comprehensive sports screening",
      "Rehab milestones tied to performance",
      "Prevention drills tailored to sport",
    ],
    details:
      "Sports injury care covers acute management, functional testing, and prevention drills exactly as highlighted by the clinic’s programme overview, helping athletes return stronger.",
    heroImage:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Athlete receiving knee support from sports therapist",
    sections: [
      {
        heading: "All-round athlete care",
        body:
          "Immediate injury management is followed by functional testing and sport-specific retraining, staying faithful to the clinic’s sports injury pathway."
      },
      {
        heading: "Reinjury prevention",
        body:
          "Strength and proprioception drills are designed to match the demands of cricket, football, running, and other sports."
      },
      {
        heading: "Progress monitoring",
        body:
          "Return-to-play is benchmarked against strength, agility, and confidence metrics, mirroring the performance ladders shared in the clinic content.",
      },
    ],
  },
  {
    title: "Arthritis",
    slug: "arthritis",
    iconKey: "arthritis",
    description:
      "Medical, interventional, and surgical management of osteoarthritis and inflammatory arthritis focusing on pain relief and joint preservation.",
    focus: "Viscosupplementation · Lifestyle optimisation",
    highlights: [
      "Stage-wise medical therapy",
      "Injections including PRP and viscosupplement",
      "Joint preservation and replacement planning",
    ],
    details:
      "The arthritis clinic mirrors the step-wise plan outlined on the website—from medication optimisation and regenerative injections to bracing and, when required, joint replacement.",
    heroImage:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Patient with arthritis receiving hand therapy",
    sections: [
      {
        heading: "Stage-wise care",
        body:
          "Disease-modifying medication, hyaluronic acid, PRP injections, and bracing keep joints comfortable and delay surgery."
      },
      {
        heading: "Lifestyle optimisation",
        body:
          "Weight control, anti-inflammatory nutrition, and activity coaching reflect the self-care modules emphasised by the clinic."
      },
      {
        heading: "Joint preservation planning",
        body:
          "When degeneration progresses, joint preservation or replacement planning is done collaboratively with patients and caregivers."
      },
      {
        heading: "Who benefits?",
        body:
          "Early to advanced osteoarthritis, rheumatoid arthritis, and inflammatory arthropathies where pain or stiffness persists despite medication and lifestyle care.",
      },
    ],
  },
  {
    title: "Trauma Management",
    slug: "trauma-management",
    iconKey: "traumaManagement",
    description:
      "Round-the-clock fracture, polytrauma, and complex injury care with evidence-led fixation techniques and coordinated rehabilitation.",
    focus: "Operative excellence · Early weight-bearing",
    highlights: [
      "Emergency fracture resuscitation",
      "Minimally invasive fixation techniques",
      "Post-operative rehab for functional recovery",
    ],
    details:
      "Damage-control orthopaedics, definitive fixation, and supervised rehabilitation follow the trauma management blueprint described by the clinic, restoring alignment while preserving soft tissue.",
    heroImage:
      "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?auto=format&fit=crop&w=1200&q=80",
    heroAlt: "Emergency orthopaedic team treating trauma patient",
    sections: [
      {
        heading: "Rapid response",
        body:
          "ATLS-compliant resuscitation and imaging triage stabilise patients quickly, matching the clinic’s trauma care promises."
      },
      {
        heading: "Evidence-led fixation",
        body:
          "Locking plates, intramedullary nails, and external fixators are selected to restore alignment while preserving soft tissue."
      },
      {
        heading: "Coordinated rehabilitation",
        body:
          "Physiotherapists initiate mobilisation, gait training, and occupational therapy early to regain independence."
      },
      {
        heading: "Who benefits?",
        body:
          "Polytrauma, complex fractures, non-unions, and limb salvage cases requiring multidisciplinary input are managed under this round-the-clock service, mirroring the clinic promise.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesOffered.find((service) => service.slug === slug);

export const testimonials: Testimonial[] = [
  {
    quote:
      "Three months post knee replacement and I’m back to my morning walks without pain. Dr. Nayak’s team handheld me through every milestone.",
    name: "Sangeeta Rao",
    role: "Banking Professional",
  },
  {
    quote:
      "Their sports injury clinic rebuilt my ACL and confidence. Return-to-play metrics ensured I rejoined my football squad safely.",
    name: "Akshay Sharma",
    role: "Semi-professional Footballer",
  },
  {
    quote:
      "The spine team’s minimally invasive approach meant I was back at work in two weeks, something I never imagined with a disc surgery.",
    name: "Neha Kulkarni",
    role: "Product Designer",
  },
  {
    quote:
      "Transparent counselling, realistic expectations, and compassionate follow-ups — that’s what stood out during my hip replacement journey.",
    name: "Rajesh Iyer",
    role: "Entrepreneur",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "experiencing-hand-pain-tech-might-be-held-guilty",
    title: "Experiencing Hand Pain? - Tech Might Be Held Guilty!",
    heroImage: "/images/experiencing-hand-pain-tech-might-be-held-guilty.jpg",
    heroAlt: "Person rubbing hand while using laptop",
    excerpt:
      "Tech overuse can strain your hands, wrists, and forearms. Learn the warning signs and when to seek specialist care.",
    readingTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text:
          "We live in a consistently advancing society, where efficiency and productivity are critical. Technology has turned out to be consistently present in day-to-day existence, whether that be staying aware of loved ones through your cell phone, telecommuting (considerably more typical now than many would have naturally suspected a couple of years prior) on a PC for 40 hours per week, or even through playing computer games in your vacation.",
      },
      {
        type: "paragraph",
        text:
          "The headway we've made in the last 10-20 years is surprising and has gotten us numerous new innovative advances in the field of medication, however, it is not necessarily the case that there are no downsides. On the off chance that you're encountering hand pain, tech might be, in some measure partly, at fault!",
      },
      {
        type: "paragraph",
        text:
          "Today we're investigating the expected reasons for tech-related hand pain and how you might safeguard yourself. Assuming you're living with hand pain, or on the off chance that something has begun to irritate you lately, it is an indication that you must consult with our experts. We'd be glad just to help you restore pain-free living.",
      },
      {
        type: "paragraph",
        text:
          "While utilizing technology, particularly cell phones, and PCs, individuals tend to hunch forward, causing additional tension around your spine that can prompt constant pain, in the neck, shoulders, and back. Past focusing on posture, and using technology can put an abundance of strain on your hands, wrists, and lower arms.",
      },
      {
        type: "paragraph",
        text:
          "Inflammation of the tendons and joints, small joints and tendons of the hand, as well as strains of the forearm muscles, are all possible. This can lead to more subtle issues like \"mommy’s thumb,\" which is inflammation along the base of the thumb, as well as tennis elbow and general tendonitis in the wrist area.",
      },
      {
        type: "paragraph",
        text:
          "It's critical to be proactive in protecting your body from injuries and conditions caused by long-term intensive use, which begins with addressing the warning signs. After spending extended hours at your computer or on your phone, you might notice discomfort in your fingers, hands, wrists, or forearms. If you end your workday with neck pain from hunching over your laptop, your body is telling you that something needs to be done, or it will only get worse. If you're experiencing pain in and around your thumb after playing video games, you may have \"Gamer's Thumb,\" which is similar to de Quervain's tenosynovitis.",
      },
      {
        type: "paragraph",
        text:
          "The good news is that if you catch it early enough, resting and limiting your time using whatever piece of technology is causing your pain will help you feel better and give your body time to heal. If you're still in pain after a brief break from the offending technology, it's time to see a pain specialist figure out what's wrong.",
      },
      {
        type: "paragraph",
        text: "We'd love nothing more than to help you get back to living pain-free!",
      },
    ],
  },
  {
    slug: "common-overlooked-signs-of-sports-injuries",
    title: "Common Overlooked Signs Of Sports Injuries",
    heroImage: "/images/common-overlooked-signs-of-sports-injuries.jpg",
    heroAlt: "Athlete holding injured knee on sports field",
    excerpt:
      "Muscle pain, joint pain, and numbness are often ignored warning signs of sports injuries. Know when to take them seriously.",
    readingTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text:
          "Injuries can occur during any activity, but they are more likely to occur in high-intensity sports or activities that require repetitive or strong motions. There are some obvious warning signs to look out for, such as pain, swelling, and stiffness, but other symptoms may be less obvious or easily neglected.",
      },
      {
        type: "paragraph",
        text:
          "Let's take a look at some of the most common injury warning signs that both athletes and nonathletes overlook.",
      },
      {
        type: "heading",
        text: "Muscle pain",
      },
      {
        type: "paragraph",
        text:
          "Muscle pain is often overlooked as a result of the mentality of \"No pain, no gain.\" However, muscle pain is a genuine indication of a potential physical injury, particularly assuming it is serious or progressing - and furthermore on the off chance that you are not consistent enough about performing warm-ups before weighty movement.",
      },
      {
        type: "paragraph",
        text:
          "Many people suffer from muscle pain on a daily basis, especially if they:",
      },
      {
        type: "list",
        items: [
          "Have sleeping habits that include lying down in the same spot for an extended period",
          "Maintain the same posture when working, studying, or sitting still for an extended time",
          "Are you on a medication course that may cause muscle aches",
          "Have a medical condition that causes muscle pain",
          "Regularly exercise and workout",
        ],
      },
      {
        type: "paragraph",
        text:
          "Muscle pain is easy to dismiss as insignificant, especially when it occurs during a workout, sports practice, or competition. Any new aches, on the other hand, should be taken seriously because they could indicate an orthopedic injury that necessitates medical attention.",
      },
      {
        type: "heading",
        text: "Joint pain",
      },
      {
        type: "paragraph",
        text:
          "A joint is a point where two or more bones meet to allow movement. Knees, elbows, hips, ankles, wrists, shoulders, and fingers are the most commonly injured joints in sports.",
      },
      {
        type: "paragraph",
        text:
          "Joint pain can be caused by a variety of factors, including:",
      },
      {
        type: "list",
        items: [
          "Keeping your joints in the same position for an extended period",
          "Performing motions that are repeated",
          "Being overweight or rapidly gaining weight",
        ],
      },
      {
        type: "paragraph",
        text:
          "If you have persistent or severe joint pain, see our orthopedic doctors. The doctors here can suggest a treatment plan that will target the source of your pain, provide relief, and help you avoid the recurrence of the sports injury.",
      },
      {
        type: "heading",
        text: "Numbness",
      },
      {
        type: "paragraph",
        text:
          "The sensation of pins and needles in the affected area is common with numbness or tingling. Arms, legs, hands, feet, fingers, and/or toes are typically affected. A burning sensation can accompany the numbness and tingling.",
      },
      {
        type: "paragraph",
        text:
          "If the numbness and tingling are accompanied by the following symptoms, see our orthopedic doctors right away.",
      },
      {
        type: "list",
        items: [
          "Weakness of muscles and limbs",
          "Loss of control over your limbs, bladder, or bowels",
          "Inability to move a part of your body",
          "Instability and walking difficulties",
          "Confusion or unconsciousness",
        ],
      },
    ],
  },
  {
    slug: "top-5-most-common-foot-and-ankle-injuries",
    title: "Top 5 Most Common Foot And Ankle Injuries To Look Out For",
    heroImage: "/images/top-5-most-common-foot-and-ankle-injuries-to-look-out-for.jpg",
    heroAlt: "Close-up of ankle being supported after injury",
    excerpt:
      "Heading back to training? Know the five foot and ankle injuries that strike most often and how to respond quickly.",
    readingTime: "9 min read",
    content: [
      {
        type: "paragraph",
        text:
          "If you’re just getting back into exercising, you should always make sure to avoid injury. Foot and ankle injuries are common after long bouts of inactivity. Explore our list to help you identify the most common foot and ankle injuries, so you know when it’s time to seek treatment.",
      },
      {
        type: "heading",
        text: "1. Ankle Sprains",
      },
      {
        type: "paragraph",
        text:
          "Ankle sprains are one of the most common exercise-related injuries we see. When the foot twists, rolls, or turns beyond its range of motion, this occurs. An ankle sprain can also occur when running or hiking on uneven terrains, such as rocky ground. After an injury, you may experience pain and stiffness for a few days, but it will usually heal on its own with rest. Icing your ankle can also help to reduce swelling. High ankle sprains, on the other hand, which affect the ligaments just above the ankle, are more serious. Advanced sprain treatments, such as a brace or boot to keep the ankle straight while it heals, may be required. It's possible that chronic pain from an ankle sprain is the result of a more serious underlying condition. In these cases, you should seek immediate medical attention from a sports medicine specialist.",
      },
      {
        type: "heading",
        text: "2. Plantar Fasciitis",
      },
      {
        type: "paragraph",
        text:
          "The plantar fascia is a tendon that runs beneath the foot and crosses the arch. It's a thick tissue band that runs from the heel's inner edge to the toes.",
      },
      {
        type: "paragraph",
        text:
          "Plantar fasciitis is a condition in which the band of the foot becomes swollen or inflamed, usually as a result of striking the ground while running or jumping. Pain on the inner edge of the heel is common, especially in the morning after long periods of inactivity.",
      },
      {
        type: "paragraph",
        text:
          "Although there is no cure for this condition, it can be managed by staying as off your feet as possible. Switching to shoes with good arch support can also help, so avoid wearing sandals or flip-flops.",
      },
      {
        type: "heading",
        text: "3. Achilles Tendonitis or Tears",
      },
      {
        type: "paragraph",
        text:
          "The Achilles tendon connects the back of your heel to the calf muscle. This tendon can swell after repeated impacts with the ground, causing minor pain or discomfort. The most common causes of these injuries are not stretching before a workout or having \"flat feet,\" which occur when your entire sole touches the ground when standing straight up. Tendonitis pain is usually mild to moderate, and it will go away with plenty of rest.",
      },
      {
        type: "paragraph",
        text:
          "Tears in the Achilles tendon are much more severe and cause immediate, severe pain. If you're suffering from this type of pain, you should seek medical help to determine the extent of your injury and develop a rehabilitation plan with your sports medicine physician to get you back in shape!",
      },
      {
        type: "heading",
        text: "4. Turf Toe",
      },
      {
        type: "paragraph",
        text:
          "Turf toe is a common injury among football players who play on artificial turf — but that doesn't mean amateur athletes can't get it, too! It is caused by toe hyperextension, which causes pain, swelling, and limited movement.",
      },
      {
        type: "paragraph",
        text:
          "As with most foot injuries, it is best to stay off your feet. If you are in severe pain or swelling, you should seek medical attention as soon as possible. A doctor may advise you to brace your toe by taping it to another toe or by putting your foot in a brace or boot.",
      },
      {
        type: "heading",
        text: "5. Broken Metatarsal",
      },
      {
        type: "paragraph",
        text:
          "A broken metatarsal (or broken toe) is a common injury that can happen to anyone at any time. People returning to sports after a long period of inactivity, on the other hand, are especially vulnerable because their form may not be what it used to be. The most common causes of these injuries are impacts, such as stubbing your toe against furniture. Running or exercising with a high impact can also cause tiny metatarsal stress fractures in the toe. These stress fractures can eventually result in foot abnormalities, crooked toes, or osteoporosis.",
      },
      {
        type: "paragraph",
        text:
          "\"If you can walk on it, it's not broken,\" as the saying goes. That is not correct. Many athletes will ignore the pain of a broken toe and walk for miles, convinced that their toe is fine. When attempting to identify a broken metatarsal, look for crooked or misaligned toes, as well as bruising and swelling the next morning.",
      },
      {
        type: "paragraph",
        text:
          "If you are experiencing severe pain as a result of an impact, you should seek medical help right away.",
      },
    ],
  },
];

export const blogSpotlight: BlogPost[] = blogArticles.map(({ title, slug, excerpt, readingTime }) => ({
  title,
  slug,
  excerpt,
  readingTime,
}));

export const getBlogBySlug = (slug: string) => blogArticles.find((article) => article.slug === slug);

export const faqs: FAQItem[] = [
  {
    question: "Do I need a referral to consult Dr. Nayak?",
    answer:
      "No referral is required. You can request an appointment directly via the online booking form or WhatsApp for quick scheduling.",
  },
  {
    question: "How soon can I walk after knee replacement?",
    answer:
      "Most patients begin assisted walking within 6 hours of surgery under the enhanced recovery protocol and typically climb stairs by day two.",
  },
  {
    question: "Do you offer second opinions on complex cases?",
    answer:
      "Yes, comprehensive second opinion reviews are available. Upload prior imaging and reports to receive a personalised plan within 48 hours.",
  },
  {
    question: "Which insurance networks are supported?",
    answer:
      "Cashless facilities are available with leading insurers including Star Health, HDFC Ergo, ICICI Lombard, and Aditya Birla Health.",
  },
];

export const mapEmbed = {
  title: "Tarun Tower Clinic",
  address:
    "Ground Floor, Tarun Tower, 9, Kaggadasapura Main Rd, Kondappa Layout, C V Raman Nagar, Bengaluru, Karnataka 560093",
  iframeSrc:
    "https://www.google.com/maps?q=Ground+Floor,+Tarun+Tower,+9,+Kaggadasapura+Main+Rd,+Kondappa+Layout,+C+V+Raman+Nagar,+Bengaluru,+Karnataka+560093&output=embed",
};

