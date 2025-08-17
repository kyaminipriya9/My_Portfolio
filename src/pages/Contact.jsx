import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-8">Contact</h1>

            <div className="grid sm:grid-cols-2 gap-6">
                <a
                    href="mailto:k.priya.22033@iitgoa.ac.in"
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:shadow-purple-500/30"
                >
                    <Mail className="h-5 w-5" />
                    <span>k.priya.22033@iitgoa.ac.in</span>
                </a>

                <a
                    href="tel:+917893016228"
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:shadow-purple-500/30"
                >
                    <Phone className="h-5 w-5" />
                    <span>+91 7893016228</span>
                </a>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>4-195, Balaji Nagar Colony, Greamspet, Chittoor, Andhra Pradesh</span>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/kyaminipriya9"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:shadow-purple-500/30"
                    >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/yamini-priya-k-404b76259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:shadow-purple-500/30"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://leetcode.com/u/kyaminipriya/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:shadow-purple-500/30"
                    >
                        {/* LeetCode Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="h-5 w-5 fill-white"
                        >
                            <path d="M119.64 20.48L60.14 80a8 8 0 0011.32 11.32l59.5-59.52 59.52 59.52a8 8 0 0011.32-11.32l-65.18-65.18a8 8 0 00-11.32 0zM60 139a8 8 0 000 11.32l65.18 65.18a8 8 0 0011.32 0l65.18-65.18a8 8 0 00-11.32-11.32L128 197.5 71.32 139a8 8 0 00-11.32 0z" />
                        </svg>
                        <span>LeetCode</span>
                    </a>

                    <a
                        href="https://www.naukri.com/code360/profile/kyaminipriya"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:shadow-orange-500/30"
                    >
                        {/* Coding Ninjas Icon (custom simple logo style) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="h-5 w-5 fill-orange-500"
                        >
                            <path d="M64 48h128v160H64z" />
                            <path d="M96 80h64v32H96zM96 144h64v32H96z" fill="white" />
                        </svg>
                        <span>Naukri</span>
                    </a>

                </div>
            </div>
        </section>
    );
}
