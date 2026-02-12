import Link from "next/link";
import { LuExternalLink, LuFileText, LuBookOpen, LuQuote } from "react-icons/lu";

const researchGateProfile = {
  url: "https://www.researchgate.net/profile/Tushar-Nayak-2",
  stats: {
    publications: 10,
    reads: "500+",
    citations: "20+",
  },
};

// Filled from PubMed / publisher / Semantic Scholar sources
const publications = [
  {
    title: "Fracture Occurrence following Prophylactic Nailing in a Case of Bisphosphonate-induced Atypical Femoral Fracture – A Rare Case Report",
    authors: "Kumardev Arvind Rajamanya, Tushar Nayak, Rahul Shah",
    description: "Case report of a patient on long-term bisphosphonates who sustained atypical femoral fracture and later experienced fracture occurrence after prophylactic intramedullary nailing — discusses management decisions and need for vigilance after prophylactic fixation.",
    year: "2025",
    journal: "Journal of Orthopaedic Case Reports",
    citations: "N/A",
    link: "https://www.researchgate.net/publication/394327798_Fracture_Occurrence_following_Prophylactic_Nailing_in_a_Case_of_Bisphosphonate-induced_Atypical_Femoral_Fracture_-_A_Rare_Case_Report",
  },
  {
    title: "Comparison of the Efficacy of Transdermal Buprenorphine Versus Ketoprofen Patches for Post-operative Analgesia in Total Knee Arthroplasty: A Randomised Controlled Trial",
    authors: "Tushar Nayak, Mukund M. Ojha, Mohd Akhtar Ansari, Sandeep Sehrawat, V. Shankar, S. Kumar, V. Kumar",
    description: "Randomised controlled trial comparing transdermal buprenorphine patch (BTP) with ketoprofen patch (KTP) for post-op analgesia after total knee arthroplasty — found improved pain control and higher patient satisfaction with BTP without increased adverse effects.",
    year: "2024",
    journal: "Cureus",
    citations: "1 citation",
    link: "https://www.researchgate.net/publication/385257380_Comparison_of_the_Efficacy_of_Transdermal_Buprenorphine_Versus_Ketoprofen_Patches_for_Post-operative_Analgesia_in_Total_Knee_Arthroplasty_A_Randomised_Controlled_Trial",
  },
  {
    title: "Chronic Osteochondral Fractures of the Patella Managed with Open Reduction and Internal Fixation Yields Excellent Knee Function",
    authors: "Ravi Mittal, Vijay K. Digge, Tushar Nayak, et al.",
    description: "Retrospective series evaluating ORIF with headless compression screws for chronic osteochondral fractures of the patella — reports good clinicoradiological outcomes and supports ORIF even in delayed presentations.",
    year: "2023",
    journal: "The Journal of Knee Surgery",
    citations: "1 citation",
    link: "https://www.researchgate.net/publication/360026947_Chronic_Osteochondral_Fractures_of_the_Patella_Managed_with_Open_Reduction_and_Internal_Fixation_Yields_Excellent_Knee_Function",
  },
  {
    title: "Medial Femoral Condyle Stress Fracture: A Case Report",
    authors: "Mukund M. Ojha, Tushar Nayak, Shivanand Gamanagatti, Vijay Kumar",
    description: "Case report describing a stress fracture of the medial femoral condyle, clinical presentation, imaging findings (MRI), and management; highlights a rare site for stress fracture and diagnostic approach.",
    year: "2022",
    journal: "Journal of Orthopaedic Case Reports",
    citations: "N/A",
    link: "https://www.researchgate.net/publication/369350097_Medial_femoral_Condyle_Stress_Fracture_A_Case_Report",
  },
  {
    title: "Modified Woodward's Procedure in the Management of Neglected Sprengel's Shoulder",
    authors: "Tushar Nayak, Amrut Raje, Ashish Ragase, Love Kapoor, Venkatesan Sampath Kumar, Shah Alam Khan",
    description: "Report of experience using a modified Woodward procedure for neglected Sprengel's shoulder — surgical steps, outcomes and practical tips for correction of high-riding scapula in older children/young adults.",
    year: "2022",
    journal: "International Journal of Paediatric Orthopaedics",
    citations: "N/A",
    link: "https://www.researchgate.net/publication/367073067_Modified_Woodward's_Procedure_in_the_Management_of_Neglected_Sprengel's_Shoulder",
  },
  {
    title: "Tricortical Iliac Crest Graft as a Salvageable Option in the Reconstruction of Comminuted Posterior Wall Acetabular Fractures",
    authors: "Vijay Sharma, Hemant Bansal, Samarth Mittal, Tushar Nayak, et al.",
    description: "Series describing use of tricortical iliac crest graft to reconstruct comminuted posterior wall acetabular fractures when fixation is not possible — reports technique, radiological and functional outcomes.",
    year: "2021",
    journal: "Archives of Orthopaedic and Trauma Surgery",
    citations: "5 citations",
    link: "https://www.researchgate.net/publication/353259518_Tricortical_iliac_crest_graft_as_a_salvageable_option_in_the_reconstruction_of_comminuted_posterior_wall_acetabular_fractures_our_experience_from_a_level_1_trauma_centre",
  },
  {
    title: "Early Experiences in the Management of Traumatic Spinal Injuries at a Level 1 Trauma Centre in India During the COVID-19 Pandemic",
    authors: "Kamran M. Farooque, Tushar Nayak, Burhan Salim Siamwala, Aayush Aryal, et al.",
    description: "Descriptive study of institutional protocol and early outcomes for management of traumatic spinal injuries during the COVID-19 pandemic — details workflow changes, testing protocol and early clinical outcomes.",
    year: "2021",
    journal: "Indian Spine Journal",
    citations: "N/A",
    link: "https://www.researchgate.net/publication/353277858_Early_experiences_in_the_management_of_traumatic_spinal_injuries_at_a_level_1_trauma_center_in_India_during_the_COVID-19_pandemic",
  },
  {
    title: "From Controversy to Contemporary: A Narrative Review of the Anatomy and Biomechanics of the Posterolateral Corner of the Knee",
    authors: "Nishank Mehta, Tushar Nayak",
    description: "Narrative review that synthesises anatomic and biomechanical data on the posterolateral corner (PLC) of the knee, clarifies historical controversies, and summarises implications for diagnosis and reconstruction.",
    year: "2021",
    journal: "Arthroscopy and Orthopedic Sports Medicine",
    citations: "N/A",
    link: "https://www.researchgate.net/publication/351255445_From_controversy_to_contemporary_a_narrative_review_of_the_anatomy_and_biomechanics_of_the_posterolateral_corner_of_the_knee",
  },
  {
    title: "Concerns Regarding the Sufficiency of Isolated Buttress Plating in the Management of Posterior Wall Acetabular Fractures",
    authors: "Hemant Bansal, Tushar Nayak, Santanu Kar, Vijay Sharma",
    description: "Letter to the editor raising concerns about relying on isolated buttress plating for certain posterior wall acetabular fractures and discussing biomechanical/clinical considerations and alternative fixation strategies.",
    year: "2021",
    journal: "The Archives of Bone and Joint Surgery",
    citations: "N/A",
    link: "https://www.researchgate.net/publication/346461706_Concerns_Regarding_the_Sufficiency_of_Isolated_Buttress_Plating_in_the_Management_of_Posterior_Wall_Acetabular_Fractures_Letter_to_the_Editor",
  },
  {
    title: "Short-term Results of Surgical Treatment of Acetabular Fractures Using the Modified Stoppa Approach",
    authors: "Tushar Nayak, Samarth Mittal, Vivek Trikha, Kamran Farooque, Shivanand Gamanagatti, Vijay Sharma",
    description: "Retrospective study reporting short-term functional and radiological outcomes of acetabular fractures treated with the modified Stoppa approach — demonstrates encouraging results and discusses perioperative morbidity.",
    year: "2020",
    journal: "Journal of Clinical Orthopaedics and Trauma",
    citations: "12 citations",
    link: "https://www.researchgate.net/publication/347268071_Short-term_results_of_surgical_treatment_of_acetabular_fractures_using_the_modified_Stoppa_approach",
  },
];

export default function PublicationsPage() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-10 sm:pb-16 md:pb-20 lg:pb-24">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3 sm:mb-4 text-white">
            Research{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-cyan-400">Publications</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">
            Dr. Tushar Nayak&apos;s contributions to orthopaedic research and medical literature
          </p>
        </div>

        {/* ResearchGate Profile Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 p-5 sm:p-6 md:p-8 shadow-lg mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">ResearchGate Profile</h2>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-white">{researchGateProfile.stats.publications}</span> publications
                </span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-white">{researchGateProfile.stats.reads}</span> reads
                </span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-white">{researchGateProfile.stats.citations}</span> citations
                </span>
              </div>
            </div>
            <a
              href={researchGateProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:scale-105 hover:bg-brand-navy"
            >
              View on ResearchGate
              <LuExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sm:p-6 shadow-md hover:shadow-lg hover:border-brand-teal/40 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug line-clamp-3">
                {pub.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-500 mb-3">
                {pub.authors}
              </p>
              
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3 flex-grow">
                {pub.description}
              </p>
              
              <div className="border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">{pub.journal}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-white">{pub.year}</span>
                      <span className="inline-flex items-center rounded-full bg-brand-teal/10 px-2 py-0.5 text-[10px] font-medium text-brand-teal">
                        {pub.citations}
                      </span>
                    </div>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-teal hover:text-cyan-400 transition-colors"
                  >
                    Read Paper
                    <LuExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 sm:mt-14 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sm:p-6 md:p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center">
              <LuQuote className="w-6 h-6 text-brand-teal" />
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            For the complete list of publications, collaborations, and ongoing research projects, please visit the ResearchGate profile or contact Dr. Tushar Nayak directly.
          </p>
          <a
            href="mailto:orthopaedicsurgeontushar@gmail.com"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-brand-teal hover:text-cyan-400 transition-colors"
          >
            orthopaedicsurgeontushar@gmail.com
            <LuExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
