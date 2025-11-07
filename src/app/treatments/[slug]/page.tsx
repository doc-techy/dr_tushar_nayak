import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/site-content";
import { renderServiceIcon } from "@/lib/service-icons";

import kneeReplacementImage from "@/public/images/knee-replacement.jpg";
import hipJointReplacementImage from "@/public/images/hip_joint_replacement.jpg";
import kneeArthroscopyImage from "@/public/images/knee_arthroscopy.jpg";
import backPainManagementImage from "@/public/images/back_pain_management.jpg";
import spinalSurgeriesImage from "@/public/images/spinal_surgeries.jpg";
import sportsInjuriesImage from "@/public/images/sports_injuries.jpg";
import arthritisImage from "@/public/images/arthritis.jpg";
import traumaManagementImage from "@/public/images/trauma_management.jpg";

type NestedList = {
  label: string;
  items: string[];
};

type CustomSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  nested?: NestedList[];
  closingParagraphs?: string[];
};

type CustomTreatmentContent = {
  heroTitle?: string;
  heroTagline?: string;
  introParagraphs?: string[];
  sections: CustomSection[];
};

const treatmentContent: Record<string, CustomTreatmentContent> = {
  "knee-replacement": {
    heroTitle: "Total Knee Replacement (TKR)",
    heroTagline: "Advanced Treatment for Severe Knee Pain and Arthritis",
    sections: [
      {
        heading: "When is Knee Replacement Recommended?",
        list: [
          "Persistent knee or leg pain that limits daily activities such as walking, climbing stairs, or getting up from a chair.",
          "X-rays showing irregular or worn-out joint surfaces.",
          "Failure to respond to conservative treatments like medications, physiotherapy, or injections.",
          "Significant arthritis-related damage causing stiffness, swelling, or deformity."
        ]
      },
      {
        heading: "What is Total Knee Replacement (TKR)?",
        paragraphs: [
          "Also known as Total Knee Arthroplasty, it is a surgical procedure to replace the worn or damaged parts of the knee joint.",
          "Artificial implants (prostheses) made of metal and high-grade plastic replace the damaged surfaces.",
          "The goal is to relieve pain, restore movement, and improve quality of life."
        ]
      },
      {
        heading: "How the Procedure is Done",
        paragraphs: [
          "The damaged ends of the thigh bone (femur) and shin bone (tibia) are surgically removed.",
          "These surfaces are then replaced with precision-engineered metal and plastic prostheses."
        ],
        nested: [
          {
            label: "The implants are either:",
            items: [
              "Cemented in place using medical-grade bone cement, or",
              "Press-fit, allowing natural bone growth to secure the implant over time."
            ]
          }
        ]
      },
      {
        heading: "Who Benefits the Most",
        paragraphs: [
          "Typically recommended for older patients suffering from advanced osteoarthritis or rheumatoid arthritis.",
          "Ideal for individuals who wish to regain mobility and resume an active lifestyle after non-surgical methods have failed."
        ]
      }
    ]
  },
  "hip-joint-replacement": {
    heroTitle: "Total Hip Replacement (THR)",
    heroTagline: "Restore Mobility. Relieve Pain. Regain Quality of Life.",
    sections: [
      {
        heading: "What is Total Hip Replacement (THR)?",
        paragraphs: [
          "Also known as Total Hip Arthroplasty (THA), this is a surgical procedure where the worn-out or damaged parts of the hip joint are replaced with an artificial prosthesis.",
          "The surgery helps eliminate chronic hip pain, stiffness, and restricted movement, allowing patients to return to normal daily activities."
        ]
      },
      {
        heading: "When is Hip Replacement Recommended?",
        list: [
          "Persistent hip pain that limits walking, sitting, or daily activities.",
          "Stiffness or swelling in the hip joint reducing range of motion.",
          "X-rays showing severe arthritis or joint damage.",
          "Failure to improve with medications, physiotherapy, or other conservative treatments."
        ]
      },
      {
        heading: "How the Procedure Works",
        paragraphs: [
          "The damaged surfaces of the hip joint are surgically removed.",
          "They are replaced with a prosthetic joint made of high-quality metal and plastic components."
        ],
        nested: [
          {
            label: "Components of the prosthesis include:",
            items: [
              "Cup - replaces the worn hip socket in the pelvis.",
              "Ball and Stem - replace the damaged head and neck of the femur (thigh bone)."
            ]
          },
          {
            label: "These components are either:",
            items: [
              "Cemented into place using medical-grade bone cement, or",
              "Press-fit, allowing bone to naturally grow into the porous surface for a secure hold."
            ]
          }
        ]
      },
      {
        heading: "Longevity and Outcome",
        paragraphs: [
          "A modern hip prosthesis typically lasts 10 to 15 years, depending on lifestyle and activity level.",
          "Over time, wear or loosening may occur, which can require a revision surgery.",
          "Most patients experience dramatic pain relief, improved movement, and enhanced quality of life after recovery."
        ]
      }
    ]
  },
  "knee-arthroscopy": {
    heroTitle: "Arthroscopic Knee Surgery",
    heroTagline: "Minimally Invasive Approach for Accurate Diagnosis and Effective Treatment",
    sections: [
      {
        heading: "What is Arthroscopic Knee Surgery?",
        paragraphs: [
          "Arthroscopic knee surgery is a minimally invasive procedure that allows doctors to visualize, diagnose, and treat problems inside the knee joint.",
          "It involves using an arthroscope, a thin instrument with a camera, which displays real-time images of the knee on a monitor.",
          "This technique helps ensure precise diagnosis and targeted treatment with minimal tissue damage."
        ]
      },
      {
        heading: "Procedure Overview",
        list: [
          "The patient is given anesthesia based on their comfort and medical condition.",
          "The knee area is sterilized to prevent infection.",
          "Small incisions called portals are made around the knee to insert the arthroscope and surgical instruments.",
          "A sterile solution is used to clear the joint fluid for better visibility.",
          "The surgeon examines the inside of the knee using the camera images on the screen."
        ]
      },
      {
        heading: "If Surgical Repair is Needed",
        paragraphs: [
          "If any damage is found, the surgeon performs the necessary procedure through additional small incisions."
        ],
        list: [
          "Shaving or trimming damaged tissue",
          "Cutting or grasping torn structures",
          "Meniscal repair or cartilage smoothing"
        ],
        closingParagraphs: [
          "Once the repair is complete, the incisions are closed with sutures, and the knee is wrapped in a soft, sterile bandage."
        ]
      },
      {
        heading: "Benefits of Arthroscopic Knee Surgery",
        list: [
          "Minimally invasive with smaller incisions and faster recovery",
          "Less pain and scarring compared to open surgery",
          "Accurate diagnosis and treatment of joint problems",
          "Shorter hospital stay and quicker return to daily activities"
        ]
      }
    ]
  },
  "back-pain-management": {
    heroTitle: "Back Pain & Spine Care",
    heroTagline: "Comprehensive Diagnosis and Advanced Treatment for Spinal Conditions",
    sections: [
      {
        heading: "Common Causes of Back Pain",
        paragraphs: [
          "Back pain can arise from various spinal or muscular issues, including:"
        ],
        list: [
          "Facet arthropathy - degeneration of the small joints between vertebrae",
          "Sciatica - nerve pain radiating from the lower back to the legs",
          "Muscle strain - overstretching or injury to back muscles",
          "Sacroiliitis - inflammation of the joint connecting the spine and pelvis",
          "Bulging or herniated discs - disc material pressing on spinal nerves",
          "Degenerative disc disease - wear and tear of spinal discs with age",
          "Prolapsed intervertebral disc (PIVD) - a common structural cause of lower back pain"
        ]
      },
      {
        heading: "When to Seek Medical Help",
        list: [
          "Persistent low back pain lasting more than four weeks",
          "Pain that radiates to the legs or buttocks",
          "Numbness, tingling, or weakness in the limbs",
          "Difficulty standing, walking, or performing daily activities",
          "No relief after weeks of conservative treatment such as medications, physiotherapy, or rest",
          "If these symptoms persist, consultation with an orthopaedic spine specialist is strongly recommended."
        ]
      },
      {
        heading: "Treatment Approach",
        paragraphs: [
          "Initial management usually includes rest, posture correction, pain medications, and physiotherapy.",
          "Interventional pain management techniques may be used to relieve chronic pain and improve mobility.",
          "Surgical options are considered only when non-surgical treatments fail to provide relief or in cases of nerve compression."
        ]
      },
      {
        heading: "Our Goal",
        paragraphs: [
          "Most back problems improve with the right balance of self-care and medical guidance.",
          "Our aim is to help patients understand the cause of their pain, choose the least invasive and most effective treatment, and restore control over their daily lives."
        ]
      }
    ]
  },
  "spinal-surgeries": {
    heroTitle: "Spine Surgery & Care",
    heroTagline: "Advanced Surgical Solutions for a Healthy and Strong Spine",
    sections: [
      {
        heading: "Understanding the Importance of the Spine",
        paragraphs: [
          "The spine plays a crucial role in providing stability, flexibility, and support to the body during every movement.",
          "It also protects the spinal cord, which carries vital signals between the brain and the rest of the body.",
          "Because of its importance, any spinal condition or injury should be evaluated and treated by a skilled orthopaedic spine specialist."
        ]
      },
      {
        heading: "Common Spine Surgeries",
        paragraphs: [
          "At leading orthopaedic hospitals, several advanced surgical procedures are performed to treat various spine-related conditions:"
        ],
        list: [
          "Spinal fusion",
          "Artificial disc replacement",
          "Discectomy",
          "Laminectomy"
        ],
        nested: [
          {
            label: "Spinal fusion",
            items: [
              "A bone graft is placed between two or more vertebrae to fuse them into a single solid bone.",
              "Metal plates, screws, or cages may be used to stabilize and support the spine during healing."
            ]
          },
          {
            label: "Artificial disc replacement",
            items: [
              "An artificial disc implant is inserted between two vertebrae to replace a damaged or degenerated disc, restoring natural movement and cushioning."
            ]
          },
          {
            label: "Discectomy",
            items: [
              "A procedure where a portion of a herniated or bulging disc that is pressing on a nerve is carefully removed to relieve pain and nerve compression."
            ]
          },
          {
            label: "Laminectomy",
            items: [
              "Involves the partial removal of a vertebra (lamina) to reduce pressure on the spinal cord or nerves, often used to treat spinal stenosis."
            ]
          }
        ]
      },
      {
        heading: "Why Choose Surgical Treatment",
        list: [
          "Relieves chronic pain caused by nerve compression or structural issues.",
          "Restores mobility and spinal stability.",
          "Improves posture and overall quality of life.",
          "Enables quicker recovery with minimally invasive techniques in many cases."
        ]
      }
    ]
  },
  "sports-injuries": {
    heroTitle: "Sports Injury & Arthroscopy",
    heroTagline: "Comprehensive Care for Athletes and Active Individuals",
    sections: [
      {
        heading: "Expert Diagnosis and Tailored Treatment",
        paragraphs: [
          "At our orthopaedics department, we specialize in the diagnosis and treatment of sports-related injuries.",
          "Our expert sports injury specialists perform detailed assessments and investigations to identify the exact cause of pain or dysfunction.",
          "Depending on the condition, patients receive personalized treatment plans, which may include:"
        ],
        list: [
          "Physiotherapy and rehabilitation programs",
          "Targeted local injections for pain and inflammation control",
          "Keyhole (arthroscopic) surgery for minimally invasive joint repair"
        ]
      },
      {
        heading: "Common Sports Injuries We Treat",
        paragraphs: [
          "Our team provides advanced care for athletes and active individuals dealing with:"
        ],
        list: [
          "Knee injuries",
          "Shoulder injuries",
          "Elbow and wrist conditions",
          "Foot and ankle injuries"
        ],
        nested: [
          {
            label: "Knee injuries",
            items: [
              "Anterior cruciate ligament (ACL) tear",
              "Posterior cruciate ligament (PCL) injury",
              "Meniscus tear",
              "Cartilage or chondral injury"
            ]
          },
          {
            label: "Shoulder injuries",
            items: [
              "Rotator cuff tear",
              "Recurrent shoulder dislocation",
              "Acromioclavicular joint (ACJ) injury"
            ]
          },
          {
            label: "Elbow and wrist conditions",
            items: [
              "Tennis elbow",
              "Painful or stiff elbow",
              "Wrist ligament and tendon injuries"
            ]
          },
          {
            label: "Foot and ankle injuries",
            items: [
              "Lateral ligament complex injury",
              "Peroneal tendon subluxation and related instability"
            ]
          }
        ]
      },
      {
        heading: "Why Choose Our Sports Medicine Care",
        list: [
          "Experienced orthopaedic surgeons specializing in sports injuries",
          "Minimally invasive arthroscopic techniques for faster recovery",
          "Comprehensive physiotherapy and rehabilitation support",
          "Individualized treatment to help athletes return to peak performance safely and efficiently"
        ]
      }
    ]
  },
  arthritis: {
    heroTitle: "Arthritis Treatment",
    heroTagline: "Comprehensive Care to Relieve Pain and Restore Mobility",
    sections: [
      {
        heading: "Understanding Arthritis",
        paragraphs: [
          "Arthritis refers to a group of conditions that cause pain, stiffness, swelling, and reduced mobility in the joints.",
          "It can affect people of all ages and may impact one or multiple joints in the body.",
          "Our approach focuses on accurate diagnosis, holistic management, and long-term relief tailored to each patient's condition."
        ]
      },
      {
        heading: "Types of Arthritis We Treat",
        paragraphs: [
          "We provide comprehensive care for different forms of arthritis:"
        ],
        nested: [
          {
            label: "Osteoarthritis (OA)",
            items: [
              "The most common type of arthritis, also known as degenerative joint disease.",
              "Occurs when the protective cartilage that cushions the joints gradually wears down over time.",
              "Commonly affects the hands, hips, knees, and spine.",
              "Symptoms include joint pain, stiffness, swelling, and reduced flexibility."
            ]
          },
          {
            label: "Rheumatoid arthritis (RA)",
            items: [
              "A chronic inflammatory and autoimmune disease where the body's immune system attacks its own joint tissues.",
              "Leads to pain, swelling, stiffness, deformity, and loss of joint function.",
              "Being a systemic disease, it can also affect other organs such as the heart, lungs, and eyes."
            ]
          }
        ]
      },
      {
        heading: "Our Treatment Approach",
        paragraphs: [
          "We use a multifaceted and patient-centered approach to manage arthritis effectively:"
        ],
        list: [
          "Dietary modifications and lifestyle guidance to reduce inflammation and support joint health.",
          "Supplements and medications to strengthen cartilage and relieve pain.",
          "Physical therapy and exercise plans to improve flexibility and maintain mobility.",
          "Advanced interventions, including injections or minimally invasive procedures, when conservative methods are not sufficient."
        ]
      },
      {
        heading: "Goal of Treatment",
        paragraphs: [
          "Our goal is to help patients regain movement, reduce pain, and improve quality of life through safe, evidence-based, and holistic arthritis management."
        ]
      }
    ]
  },
  "trauma-management": {
    heroTitle: "Bone Fracture Treatment",
    heroTagline: "Accurate Diagnosis and Expert Care for All Types of Fractures",
    sections: [
      {
        heading: "Understanding Bone Fractures",
        paragraphs: [
          "A bone fracture occurs when the continuity of a bone is disrupted, often due to trauma, stress, or underlying medical conditions that weaken the bone.",
          "Common causes include:"
        ],
        list: [
          "Accidental injuries or falls",
          "Repetitive stress or overuse"
        ],
        nested: [
          {
            label: "Medical conditions such as:",
            items: [
              "Osteoporosis (bone thinning)",
              "Bone cancer",
              "Osteogenesis imperfecta and other bone-weakening disorders"
            ]
          }
        ]
      },
      {
        heading: "How Bone Fractures Are Treated",
        paragraphs: [
          "Treatment aims to restore the bone's normal alignment, stability, and function.",
          "Depending on the type and severity of the fracture, procedures may include:"
        ],
        list: [
          "Reduction (realignment) - repositioning the broken bone ends to ensure proper healing.",
          "Immobilization - using internal or external splints, casts, or braces to keep the bone stable during recovery.",
          "Surgical intervention - in complex or displaced fractures, metal plates, screws, or rods may be used to stabilize the bone."
        ]
      },
      {
        heading: "Our Treatment Approach",
        paragraphs: [
          "At our orthopaedic department, every fracture case is managed with precision and care:"
        ],
        list: [
          "Thorough evaluation and imaging to assess fracture type and severity.",
          "Customized treatment plans developed by experienced orthopaedic surgeons.",
          "Evidence-based protocols aligned with international clinical standards.",
          "Continuous follow-up and rehabilitation support for optimal recovery and bone strength restoration."
        ]
      },
      {
        heading: "Why Choose Us",
        list: [
          "Expert orthopaedic specialists experienced in fracture management.",
          "Advanced diagnostic and surgical technologies.",
          "Safe, patient-focused care with quick recovery protocols."
        ]
      }
    ]
  }
};

const treatmentImages: Record<string, StaticImageData> = {
  "knee-replacement": kneeReplacementImage,
  "hip-joint-replacement": hipJointReplacementImage,
  "knee-arthroscopy": kneeArthroscopyImage,
  "back-pain-management": backPainManagementImage,
  "spinal-surgeries": spinalSurgeriesImage,
  "sports-injuries": sportsInjuriesImage,
  arthritis: arthritisImage,
  "trauma-management": traumaManagementImage,
};

type TreatmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: TreatmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Treatment not found",
    };
  }

  const content = treatmentContent[service.slug] ?? null;
  const pageTitle = content?.heroTitle ?? service.title;
  const description = content?.heroTagline ?? service.description;

  return {
    title: `${pageTitle} | Dr. Tushar Nayak`,
    description,
    alternates: {
      canonical: `/treatments/${service.slug}`,
    },
  };
}

export default async function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const content = treatmentContent[service.slug] ?? null;
  const pageTitle = content?.heroTitle ?? service.title;
  const heroDescription = content?.heroTagline ?? service.description;
  const heroImageData = treatmentImages[service.slug];
  const heroImageSrc = heroImageData ?? service.heroImage;
  const heroAspectRatio = heroImageData
    ? `${heroImageData.width} / ${heroImageData.height}`
    : "4 / 3";

  return (
    <section className="relative overflow-hidden bg-gray-950 text-gray-200">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[720px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[-280px] right-[-120px] h-[560px] w-[560px] rounded-full bg-gradient-to-t from-pink-500/10 via-purple-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-28 pt-8 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col gap-6 lg:gap-8 lg:max-w-2xl">
            <div className="inline-flex items-center gap-4">
              <span className="rounded-2xl bg-white/5 p-5 shadow-[0_18px_36px_-18px_rgba(129,140,248,0.6)]">
                {renderServiceIcon(service.iconKey, "h-12 w-12 text-indigo-300")}
              </span>
              <div className="space-y-1">
                <h1 className="text-3xl font-black text-white sm:text-4xl lg:text-[2.85rem]">
                  {pageTitle}
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
              {heroDescription}
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_40px_120px_-50px_rgba(79,70,229,0.55)]"
            style={{ aspectRatio: heroAspectRatio }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent" aria-hidden />
            <Image
              src={heroImageSrc}
              alt={service.heroAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <article className="space-y-12 rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          {content ? (
            <div className="space-y-12">
              {content.introParagraphs?.length ? (
                <div className="space-y-4 text-lg leading-relaxed text-gray-200">
                  {content.introParagraphs.map((paragraph, index) => (
                    <p key={`intro-${index}`} className="rounded-2xl bg-white/5 px-6 py-4 shadow-[0_20px_60px_-50px_rgba(129,140,248,0.65)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              <div className="grid gap-8 lg:grid-cols-2">
                {content.sections.map((section) => (
                  <section
                    key={section.heading}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_35px_120px_-60px_rgba(99,102,241,0.8)] transition hover:border-indigo-400/40 hover:bg-white/10"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/5" aria-hidden />
                    <div className="relative space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400" aria-hidden />
                        <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
                      </div>

                      {section.paragraphs?.map((paragraph, index) => (
                        <p
                          key={`${section.heading}-paragraph-${index}`}
                          className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm leading-relaxed text-gray-200"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.list ? (
                        <ul className="space-y-3">
                          {section.list.map((item, index) => (
                            <li
                              key={`${section.heading}-list-${index}`}
                              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent px-4 py-3 text-sm text-gray-100"
                            >
                              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.nested?.map((group) => (
                        <div
                          key={`${section.heading}-${group.label}`}
                          className="space-y-2 rounded-2xl border border-white/5 bg-white/5 p-4"
                        >
                          <p className="text-sm font-semibold text-indigo-200">{group.label}</p>
                          <ul className="space-y-2">
                            {group.items.map((item, index) => (
                              <li
                                key={`${section.heading}-${group.label}-item-${index}`}
                                className="flex items-start gap-3 text-sm text-gray-100"
                              >
                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {section.closingParagraphs?.map((paragraph, index) => (
                        <p
                          key={`${section.heading}-closing-${index}`}
                          className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm leading-relaxed text-gray-200"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <p className="text-lg leading-relaxed text-gray-300">{service.details}</p>

              <div className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
                  Programme highlights
                </h2>
                <ul className="grid gap-4 text-sm text-gray-300 sm:grid-cols-2">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {service.sections.map((section) => (
                  <section
                    key={section.heading}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_-60px_rgba(129,140,248,0.7)]"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/5" aria-hidden />
                    <div className="relative space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400" aria-hidden />
                        <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
                      </div>
                      <p className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm leading-relaxed text-gray-200">
                        {section.body}
                      </p>
                      {section.points ? (
                        <ul className="space-y-3">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent px-4 py-3 text-sm text-gray-100"
                            >
                              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-indigo-500/40 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-500/20 p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Need a personalised opinion?</h2>
            <p className="mt-2 max-w-2xl text-sm text-indigo-100">
              Book a consultation to discuss implant choices, recovery timelines, and rehabilitation plans tailored to your goals.
            </p>
          </div>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-900 transition hover:-translate-y-0.5 hover:bg-indigo-100"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

