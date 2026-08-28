type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

type BlogArticle = {
  slug: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  excerpt: string;
  readingTime: string;
  author?: string;
  content: BlogContentBlock[];
};

function faqBlocks(intro: string, faqs: { q: string; a: string }[]): BlogContentBlock[] {
  const blocks: BlogContentBlock[] = [
    { type: "paragraph", text: intro },
    {
      type: "paragraph",
      text: "Answers below are for education and do not replace a personal orthopaedic consultation.",
    },
  ];

  faqs.forEach(({ q, a }, index) => {
    blocks.push({ type: "heading", text: `${index + 1}. ${q}` });
    blocks.push({ type: "paragraph", text: a });
  });

  blocks.push({
    type: "paragraph",
    text: "If knee pain, instability or swelling is affecting your daily life, book a consultation with Dr. Tushar Nayak for a personalised assessment and treatment plan.",
  });

  return blocks;
}

/** Weekly FAQ series — Knee & Sports Orthopaedic Care (publish / share one per week) */
export const kneeSportsFaqBlogs: BlogArticle[] = [
  // Week 1
  {
    slug: "faq-total-knee-replacement",
    title: "Frequently Asked Questions – Total Knee Replacement (TKR)",
    heroImage: "/images/knee-replacement.jpg",
    heroAlt: "Knee joint replacement care and rehabilitation",
    excerpt:
      "20 clear answers on total knee replacement—when it is needed, recovery, physiotherapy, stairs, driving, implant lifespan and risks.",
    readingTime: "14 min read",
    author: "Dr. Tushar Nayak | Robotic Knee Replacement Surgeon | Joint Replacement & Orthopaedic Specialist",
    content: faqBlocks(
      "Total knee replacement is one of the most effective treatments for advanced knee arthritis. These frequently asked questions explain what TKR involves, who may benefit, and what recovery typically looks like.",
      [
        {
          q: "What is total knee replacement?",
          a: "Total knee replacement, or total knee arthroplasty (TKA), is a surgery in which the damaged surfaces of the knee joint are replaced with artificial components to reduce pain and improve function.",
        },
        {
          q: "When is total knee replacement recommended?",
          a: "TKR is generally considered when severe knee arthritis causes persistent pain, stiffness or difficulty walking and other treatments such as physiotherapy, medicines or injections no longer provide adequate relief.",
        },
        {
          q: "Do I need a knee replacement if my X-ray shows bone-on-bone arthritis?",
          a: "Not necessarily. The decision depends on your pain, disability, examination and response to treatment—not the X-ray alone.",
        },
        {
          q: "What are the common symptoms that may indicate a need for TKR?",
          a: "Persistent knee pain, difficulty walking, pain while climbing stairs, stiffness, swelling, deformity and pain that interferes with sleep or everyday activities may indicate advanced knee arthritis.",
        },
        {
          q: "Is there a particular age for knee replacement surgery?",
          a: "There is no single age at which everyone should undergo TKR. Surgery is based primarily on the severity of symptoms and functional limitation rather than age alone.",
        },
        {
          q: "Can knee replacement be done in younger patients?",
          a: "Yes. Younger patients with severe arthritis, previous trauma or other causes of irreversible knee damage may require knee replacement when appropriate non-surgical options are no longer effective.",
        },
        {
          q: "Can I avoid knee replacement surgery?",
          a: "Some patients can control symptoms with weight management, physiotherapy, activity modification, medicines or injections. However, these treatments cannot restore severely damaged cartilage.",
        },
        {
          q: "How long does total knee replacement surgery take?",
          a: "The surgical procedure commonly takes around one to two hours, although the overall time in the operating and recovery areas is longer.",
        },
        {
          q: "Is total knee replacement a painful surgery?",
          a: "Pain is expected after surgery, but modern multimodal pain management, regional anaesthesia and rehabilitation protocols can significantly improve postoperative comfort.",
        },
        {
          q: "How soon can I walk after knee replacement?",
          a: "Most patients are encouraged to begin moving and walking soon after surgery, with assistance initially depending on their strength, balance and medical condition.",
        },
        {
          q: "How long does recovery after TKR take?",
          a: "Recovery varies between patients. Many people gradually return to normal daily activities over the first several weeks, while strength, confidence and function can continue improving for several months.",
        },
        {
          q: "Will I need physiotherapy after knee replacement?",
          a: "Yes. Physiotherapy is an important part of recovery and helps restore knee movement, muscle strength, walking ability and functional independence.",
        },
        {
          q: "How much can I bend my knee after TKR?",
          a: "The final range of motion varies. Preoperative knee movement, rehabilitation, swelling, muscle strength and individual healing all influence the final result.",
        },
        {
          q: "Can I climb stairs after knee replacement?",
          a: "Yes. Stair climbing is generally part of rehabilitation, although it may initially require support and a specific technique.",
        },
        {
          q: "Can I drive after total knee replacement?",
          a: "Driving should only be resumed when you have adequate knee movement, strength, reaction time and are no longer taking medications that impair driving. Your surgeon should clear you before returning to driving.",
        },
        {
          q: "How long does a knee replacement last?",
          a: "Modern knee replacements can function well for many years. More than 90% of modern knee replacements are reported to still be functioning at 15 years, although individual implant survival varies.",
        },
        {
          q: "Can I squat after knee replacement?",
          a: "Deep squatting may be uncomfortable or difficult after TKR. Whether you can safely squat depends on your knee movement, strength and individual circumstances.",
        },
        {
          q: "Can I kneel after knee replacement?",
          a: "Kneeling is possible for some patients but may remain uncomfortable because of sensitivity around the surgical area. Kneeling itself generally does not damage the implant.",
        },
        {
          q: "What are the risks of total knee replacement?",
          a: "Potential complications include infection, blood clots, stiffness, persistent pain, instability, nerve or blood-vessel injury and implant wear or loosening. Most patients, however, have significant improvement in pain and function.",
        },
        {
          q: "How do I know whether I am ready for knee replacement?",
          a: "If knee pain is significantly affecting walking, sleep, work or everyday activities despite appropriate non-surgical treatment, an orthopaedic assessment can help determine whether replacement is appropriate.",
        },
      ],
    ),
  },

  // Week 2
  {
    slug: "faq-acl-injury-reconstruction",
    title: "Frequently Asked Questions – ACL Injury & ACL Reconstruction",
    heroImage: "/images/sports_injuries.jpg",
    heroAlt: "Sports knee injury assessment and ACL care",
    excerpt:
      "20 FAQs on ACL tears—symptoms, MRI diagnosis, when surgery is needed, graft choices, recovery timelines and return to sport.",
    readingTime: "14 min read",
    author: "Dr. Tushar Nayak | Robotic Knee Replacement Surgeon | Joint Replacement & Orthopaedic Specialist",
    content: faqBlocks(
      "ACL injuries are common in sports that involve pivoting and sudden direction changes. These FAQs explain how ACL tears are diagnosed, when reconstruction is recommended, and what recovery involves.",
      [
        {
          q: "What is an ACL tear?",
          a: "The anterior cruciate ligament (ACL) is one of the major stabilising ligaments inside the knee. An ACL tear can cause instability, particularly during pivoting, running and sudden changes of direction.",
        },
        {
          q: "How does an ACL tear usually happen?",
          a: "ACL injuries commonly occur during sudden stopping, changing direction, landing awkwardly, twisting the knee or during contact sports.",
        },
        {
          q: "What are the symptoms of an ACL tear?",
          a: "Common symptoms include a popping sensation, rapid knee swelling, pain, restricted movement and a feeling that the knee is giving way.",
        },
        {
          q: "Can I walk with a completely torn ACL?",
          a: "Yes. Some people can walk relatively comfortably after the initial injury. However, walking normally does not necessarily mean that the knee is stable.",
        },
        {
          q: "How is an ACL tear diagnosed?",
          a: "Diagnosis involves a detailed history and clinical examination. X-rays may be used to assess the bones, while MRI can confirm the ACL injury and identify associated meniscus, cartilage or ligament injuries.",
        },
        {
          q: "Does every ACL tear require surgery?",
          a: "No. Treatment depends on age, activity level, knee stability, associated injuries, occupation and individual goals. Some lower-demand patients can be successfully managed without reconstruction.",
        },
        {
          q: "When is ACL reconstruction recommended?",
          a: "Reconstruction is commonly considered for active patients with symptomatic instability, athletes who want to return to pivoting sports, or patients with associated injuries that require surgical treatment.",
        },
        {
          q: "What is ACL reconstruction?",
          a: "ACL reconstruction replaces the torn ACL with a graft, usually using tissue from the patient's own body or, in selected situations, donor tissue.",
        },
        {
          q: "Which graft is best for ACL reconstruction?",
          a: "Common autograft options include patellar tendon, hamstring tendon and quadriceps tendon grafts. The appropriate graft depends on age, activity, sport, anatomy and surgeon-patient discussion.",
        },
        {
          q: "Is ACL surgery done through arthroscopy?",
          a: "Yes. ACL reconstruction is usually performed using minimally invasive arthroscopic techniques through small incisions around the knee.",
        },
        {
          q: "Can an ACL tear heal on its own?",
          a: "A completely torn ACL has limited ability to heal reliably in its original position. Some patients can function well without reconstruction, but persistent instability may require surgery.",
        },
        {
          q: "Can I delay ACL reconstruction?",
          a: "The timing depends on symptoms, activity and associated injuries. Delaying surgery may be appropriate in selected patients, but recurrent instability can increase the risk of additional meniscus or cartilage damage.",
        },
        {
          q: "Do I need physiotherapy before ACL surgery?",
          a: "Often, yes. Preoperative physiotherapy can help reduce swelling, restore knee movement and improve muscle control before reconstruction.",
        },
        {
          q: "How long does ACL reconstruction recovery take?",
          a: "Recovery is gradual and rehabilitation is usually measured in months rather than weeks. Return to sport depends on strength, movement quality, stability and functional testing rather than time alone.",
        },
        {
          q: "When can I start walking after ACL reconstruction?",
          a: "Many patients can begin walking soon after surgery, often with support initially. Weight-bearing instructions may change depending on associated meniscus or cartilage procedures.",
        },
        {
          q: "When can I return to running after ACL surgery?",
          a: "Running is introduced only after adequate healing, knee movement, strength and neuromuscular control have been achieved. The exact timing varies between patients.",
        },
        {
          q: "When can I return to sports after ACL reconstruction?",
          a: "Return to sport should be criteria-based and guided by rehabilitation progress, strength symmetry, movement control and sport-specific testing. It commonly takes several months.",
        },
        {
          q: "Can the ACL tear again after reconstruction?",
          a: "Yes. Graft failure or a new ACL injury can occur. Appropriate rehabilitation, strength training and gradual return to sport can help reduce risk.",
        },
        {
          q: "Can an ACL tear also damage the meniscus?",
          a: "Yes. ACL injuries can occur together with meniscal, cartilage or other ligament injuries. MRI is useful for identifying associated injuries.",
        },
        {
          q: "Can I play sports without ACL reconstruction?",
          a: "Some people can return to lower-demand activities without surgery, but sports involving cutting, pivoting and rapid direction changes may remain difficult if the knee is unstable.",
        },
      ],
    ),
  },

  // Week 3
  {
    slug: "faq-meniscus-tear",
    title: "Frequently Asked Questions – Meniscus Tear",
    heroImage: "/images/knee_arthroscopy.jpg",
    heroAlt: "Knee joint assessment for meniscus injury",
    excerpt:
      "20 FAQs on meniscus tears—symptoms, healing without surgery, repair vs meniscectomy, physiotherapy and when to see a specialist.",
    readingTime: "13 min read",
    author: "Dr. Tushar Nayak | Robotic Knee Replacement Surgeon | Joint Replacement & Orthopaedic Specialist",
    content: faqBlocks(
      "Meniscus tears can result from sports injuries or age-related wear. These FAQs cover symptoms, non-surgical care, arthroscopic options and recovery expectations.",
      [
        {
          q: "What is a meniscus tear?",
          a: "The menisci are two crescent-shaped structures between the thighbone and shinbone that help distribute load and absorb shock. A tear can occur from twisting, sports injuries or age-related degeneration.",
        },
        {
          q: "What are the symptoms of a meniscus tear?",
          a: "Pain, swelling, clicking, catching, difficulty bending or straightening the knee and tenderness along the joint line are common symptoms.",
        },
        {
          q: "Can a meniscus tear heal without surgery?",
          a: "Yes. Some meniscus tears can improve with activity modification, physiotherapy and appropriate non-operative treatment, particularly when there is no significant locking or persistent functional limitation.",
        },
        {
          q: "Does every meniscus tear need an operation?",
          a: "No. Treatment depends on the type and location of the tear, symptoms, age, activity level and associated knee problems.",
        },
        {
          q: "How is a meniscus tear diagnosed?",
          a: "Clinical examination is important. MRI is commonly used when imaging is required because it provides detailed information about the meniscus and other knee structures.",
        },
        {
          q: "What is a degenerative meniscus tear?",
          a: "A degenerative meniscus tear develops gradually as the meniscus changes with age and may occur together with knee osteoarthritis rather than from one specific injury.",
        },
        {
          q: "What is an acute meniscus tear?",
          a: "An acute tear usually occurs following an identifiable injury such as twisting the knee during sports, a fall or sudden rotation.",
        },
        {
          q: "What does a meniscus tear feel like?",
          a: "Patients may describe pain on one side of the knee, swelling, clicking, catching or a sensation that something is moving inside the joint.",
        },
        {
          q: "What does a locked knee mean?",
          a: "A true locked knee means the knee cannot fully bend or straighten because something is mechanically blocking movement. This requires prompt orthopaedic assessment.",
        },
        {
          q: "Can physiotherapy help a meniscus tear?",
          a: "Yes. Physiotherapy can improve muscle strength, knee movement, coordination and function and may be appropriate for many meniscus injuries.",
        },
        {
          q: "What is meniscus repair?",
          a: "Meniscus repair is a procedure in which the surgeon preserves the torn meniscus and uses sutures or other techniques to allow the tissue to heal.",
        },
        {
          q: "Is meniscus repair better than meniscus removal?",
          a: "When a tear is suitable for repair, preserving as much healthy meniscal tissue as possible is generally preferred because the meniscus contributes to load distribution and knee function.",
        },
        {
          q: "What is meniscectomy?",
          a: "Meniscectomy is the surgical removal of the unstable or irreparable portion of a torn meniscus. Surgeons generally aim to preserve as much healthy meniscus as possible.",
        },
        {
          q: "Is meniscus surgery performed using arthroscopy?",
          a: "Yes. Meniscus repair and partial meniscectomy are commonly performed using arthroscopic techniques.",
        },
        {
          q: "How long does meniscus surgery take?",
          a: "The duration varies depending on the type and complexity of the tear and whether other procedures such as ACL reconstruction are performed at the same time.",
        },
        {
          q: "How soon can I walk after meniscus surgery?",
          a: "Walking restrictions depend on whether the meniscus was repaired or partially removed and on the specific surgical findings. Your surgeon will provide an individual weight-bearing plan.",
        },
        {
          q: "How long does it take to recover from meniscus repair?",
          a: "Meniscus repair generally requires a longer rehabilitation period than a simple partial meniscectomy because the repaired tissue needs time to heal.",
        },
        {
          q: "Can a meniscus tear cause arthritis?",
          a: "Meniscal damage and loss of meniscal tissue can contribute to increased stress on the knee and may be associated with future degenerative changes. Preserving healthy meniscus is therefore an important treatment goal.",
        },
        {
          q: "Can I exercise with a meniscus tear?",
          a: "Some exercises may be safe, but activities involving deep twisting, pivoting or loaded squatting may aggravate symptoms. Exercise should be tailored to the injury and symptoms.",
        },
        {
          q: "When should I see an orthopaedic surgeon for a meniscus tear?",
          a: "Persistent pain, recurrent swelling, mechanical symptoms, knee locking, inability to return to normal activities or symptoms that do not improve with appropriate treatment warrant an orthopaedic evaluation.",
        },
      ],
    ),
  },

  // Week 4
  {
    slug: "faq-knee-arthroscopy",
    title: "Frequently Asked Questions – Knee Arthroscopy",
    heroImage: "/images/knee_arthroscopy.jpg",
    heroAlt: "Minimally invasive keyhole knee arthroscopy procedure",
    excerpt:
      "20 FAQs on knee arthroscopy (keyhole surgery)—indications, recovery, walking, work, driving and whether it treats arthritis.",
    readingTime: "12 min read",
    author: "Dr. Tushar Nayak | Robotic Knee Replacement Surgeon | Joint Replacement & Orthopaedic Specialist",
    content: faqBlocks(
      "Knee arthroscopy is a minimally invasive way to diagnose and treat selected problems inside the knee. These FAQs explain when it is used and what recovery typically involves.",
      [
        {
          q: "What is knee arthroscopy?",
          a: "Knee arthroscopy is a minimally invasive procedure in which a small camera is inserted into the knee through a small incision to diagnose and treat selected joint problems.",
        },
        {
          q: "Why is arthroscopy performed?",
          a: "Arthroscopy can be used for selected problems involving the meniscus, cartilage, ligaments, loose bodies, synovium and other structures inside the knee.",
        },
        {
          q: "Is knee arthroscopy a major surgery?",
          a: "Arthroscopy uses small incisions and is generally less invasive than open knee surgery, but it remains a surgical procedure with potential risks and should only be performed when appropriately indicated.",
        },
        {
          q: "Is arthroscopy the same as keyhole surgery?",
          a: "Yes. Knee arthroscopy is commonly referred to as keyhole or minimally invasive knee surgery because it uses small incisions.",
        },
        {
          q: "What knee conditions can be treated with arthroscopy?",
          a: "Depending on the individual case, arthroscopy may be used for meniscus tears, selected cartilage problems, ACL reconstruction, loose bodies and certain inflammatory or synovial conditions.",
        },
        {
          q: "Can arthroscopy diagnose a knee problem?",
          a: "Arthroscopy allows the surgeon to directly visualise structures inside the knee. However, most patients can be diagnosed using history, examination and appropriate imaging without diagnostic arthroscopy.",
        },
        {
          q: "Is MRI required before knee arthroscopy?",
          a: "Not always, but MRI is frequently useful when assessing meniscus, ligament and cartilage problems and helps plan treatment.",
        },
        {
          q: "Is knee arthroscopy painful?",
          a: "Some pain and swelling are expected after surgery. Pain is generally managed with medication, ice, activity modification and rehabilitation.",
        },
        {
          q: "How long does knee arthroscopy take?",
          a: "The duration depends on the procedure being performed. A straightforward arthroscopic procedure may be relatively short, while ACL reconstruction or complex meniscus repair takes longer.",
        },
        {
          q: "Can I go home the same day after arthroscopy?",
          a: "Many arthroscopic knee procedures are performed as day-care surgeries, allowing patients to return home after appropriate recovery from anaesthesia.",
        },
        {
          q: "Can I walk immediately after knee arthroscopy?",
          a: "This depends on the procedure. Patients undergoing some arthroscopic procedures can bear weight early, whereas meniscus repair or other procedures may require protected weight-bearing.",
        },
        {
          q: "How long will my knee remain swollen after arthroscopy?",
          a: "Some swelling is normal after surgery and gradually decreases. The duration depends on the procedure, activity level and individual healing.",
        },
        {
          q: "How soon can I return to work after arthroscopy?",
          a: "Return to work depends on your occupation and the procedure performed. Desk-based work may resume earlier than physically demanding work.",
        },
        {
          q: "When can I drive after knee arthroscopy?",
          a: "Driving should be resumed only when you have adequate control of the leg, can safely operate the vehicle and are not taking medications that impair alertness.",
        },
        {
          q: "Do I need physiotherapy after knee arthroscopy?",
          a: "Physiotherapy may be recommended to restore movement, strength and function, particularly after procedures such as ACL reconstruction or meniscus repair.",
        },
        {
          q: "What are the risks of knee arthroscopy?",
          a: "Potential risks include infection, bleeding, blood clots, stiffness, persistent pain, nerve or blood-vessel injury and complications related to anaesthesia.",
        },
        {
          q: "Can arthroscopy cure knee arthritis?",
          a: "Arthroscopy does not reverse established osteoarthritis. Its role depends on the specific problem causing symptoms and should not be considered a universal treatment for arthritis.",
        },
        {
          q: "Can arthroscopy treat a meniscus tear?",
          a: "Yes. Selected meniscus tears can be repaired or partially removed using arthroscopic surgery.",
        },
        {
          q: "Can ACL reconstruction be performed through arthroscopy?",
          a: "Yes. ACL reconstruction is commonly performed arthroscopically using small portals around the knee.",
        },
        {
          q: "How do I know whether I need knee arthroscopy?",
          a: "The decision depends on your symptoms, examination, imaging, diagnosis, activity requirements and response to non-surgical treatment. An orthopaedic assessment is the best way to determine whether arthroscopy is appropriate.",
        },
      ],
    ),
  },

  // Week 5
  {
    slug: "faq-robotic-total-knee-replacement",
    title: "Frequently Asked Questions – Robotic Total Knee Replacement",
    heroImage: "/images/knee-replacement.jpg",
    heroAlt: "Advanced robotic-assisted total knee replacement",
    excerpt:
      "20 FAQs on robotic TKR—how the robot assists the surgeon, accuracy, CT scans, recovery, cost and how it compares with conventional TKR.",
    readingTime: "13 min read",
    author: "Dr. Tushar Nayak | Robotic Knee Replacement Surgeon | Joint Replacement & Orthopaedic Specialist",
    content: faqBlocks(
      "Robotic technology can assist planning and precision in total knee replacement. These FAQs explain what robotic TKR is—and what it does and does not guarantee.",
      [
        {
          q: "What is robotic total knee replacement?",
          a: "Robotic total knee replacement is a knee replacement procedure in which robotic technology assists the surgeon with preoperative planning and/or intraoperative bone preparation and implant positioning.",
        },
        {
          q: "Does a robot perform the knee replacement surgery?",
          a: "No. The orthopaedic surgeon performs the operation. The robotic system is a surgical assistance and planning technology used under the surgeon's control.",
        },
        {
          q: "Is robotic knee replacement better than conventional TKR?",
          a: "Robotic assistance can improve planning and the accuracy of certain surgical steps, but current evidence does not establish that robotic TKR provides superior short-term functional outcomes or fewer complications for every patient.",
        },
        {
          q: "What is the advantage of robotic knee replacement?",
          a: "Potential advantages include detailed preoperative planning, accurate bone preparation, implant positioning and real-time information that can assist the surgeon in balancing and aligning the knee.",
        },
        {
          q: "Is robotic TKR more accurate?",
          a: "Robotic systems can improve the accuracy and consistency of certain aspects of bone cuts and implant positioning. However, accurate positioning is only one component of a successful knee replacement.",
        },
        {
          q: "Is robotic knee replacement suitable for everyone?",
          a: "Not necessarily. The suitability of robotic assistance depends on the patient's arthritis, deformity, anatomy, previous surgery, implant plan and the surgeon's preferred technology.",
        },
        {
          q: "Do I need a CT scan for robotic knee replacement?",
          a: "Some robotic systems use a preoperative CT scan to create a three-dimensional surgical plan, while other systems use different technologies. The imaging requirement depends on the robotic platform being used.",
        },
        {
          q: "Does robotic TKR cause less pain?",
          a: "Some studies have reported differences in early postoperative recovery, but the overall evidence does not establish that robotic TKR consistently produces superior pain or functional outcomes for every patient.",
        },
        {
          q: "Does robotic TKR mean a smaller incision?",
          a: "Not necessarily. The size of the incision depends on the surgical technique, patient's anatomy and other factors. Robotic assistance does not automatically mean a smaller incision.",
        },
        {
          q: "Does robotic TKR reduce blood loss?",
          a: "The effect on blood loss can vary depending on the technique and robotic system. Robotic assistance should not be promoted as a guaranteed blood-loss reduction.",
        },
        {
          q: "Is robotic TKR safer than conventional TKR?",
          a: "Both robotic-assisted and conventional TKR are established surgical approaches. Current AAOS guidance does not show a significant short-term difference in complications between the two approaches.",
        },
        {
          q: "Does robotic TKR make the implant last longer?",
          a: "There is not enough evidence to claim that robotic assistance automatically makes every knee replacement last longer. Long-term implant survival depends on many factors, including implant choice, alignment, bone quality, patient activity and surgical technique.",
        },
        {
          q: "Can robotic TKR correct a severely deformed knee?",
          a: "Robotic systems can assist with planning and execution in many deformity cases, but suitability depends on the severity and type of deformity and the surgeon's assessment.",
        },
        {
          q: "Is robotic TKR suitable for younger patients?",
          a: "Age alone does not determine whether robotic TKR is appropriate. The decision should be based on the severity of arthritis, symptoms, activity requirements, anatomy and expected benefits.",
        },
        {
          q: "Is robotic knee replacement more expensive?",
          a: "Robotic surgery may involve additional technology, planning and equipment costs. The total cost varies between hospitals and robotic systems.",
        },
        {
          q: "How long does robotic knee replacement surgery take?",
          a: "The operative time varies with the surgeon, technology, patient's anatomy and complexity of the knee. Robotic assistance does not necessarily mean that surgery will take longer or shorter in every case.",
        },
        {
          q: "How soon can I walk after robotic TKR?",
          a: "As with conventional TKR, many patients are encouraged to begin mobilisation soon after surgery. Walking progression depends on pain control, strength, balance and medical factors.",
        },
        {
          q: "Will I still need physiotherapy after robotic TKR?",
          a: "Yes. Robotic technology does not replace rehabilitation. Strengthening, range-of-motion exercises, walking practice and functional rehabilitation remain important.",
        },
        {
          q: "Does robotic TKR guarantee a perfect knee?",
          a: "No. Robotic technology can assist with surgical planning and precision, but no surgical technology can guarantee a particular outcome. Patient selection, surgical expertise, rehabilitation and individual healing all influence results.",
        },
        {
          q: "Should I choose robotic or conventional knee replacement?",
          a: "The best approach depends on your individual knee condition and the surgeon's assessment. Robotic assistance is a tool; the more important question is whether the overall surgical plan is appropriate for your knee and goals.",
        },
      ],
    ),
  },
];
