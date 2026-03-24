import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useMembers } from '../../hooks/useMembers';

const Contact: React.FC = () => {
    const { members } = useMembers();

    // Map leadership roles
    // 長翔分會幹部（待更新實際資料）
    const roles = [
        { title: '現任主席', name: '待更新' },
        { title: '現任副主席', name: '待更新' },
        { title: '現任秘書財務', name: '待更新' }
    ];

    const leadership = roles.map(role => {
        const member = members.find(m => m.name === role.name);
        return {
            ...role,
            member: member || null
        };
    });

    return (
        <section className="min-h-screen flex flex-col justify-center relative py-24 md:py-32 overflow-hidden" id="contact">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-dark/50 -skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        聯繫 <span className="text-primary">ChangSiang</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        歡迎與 BNI 長翔名人堂白金分會聯繫。無論是業務合作、商會參訪申請，或想了解更多資訊，我們隨時為您服務。<br /><br />
                        📍 例會地點：晶宴會館（民生館）<br />台北市中山區民生東路三段8號B2
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                    {leadership.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-bg-dark/60 backdrop-blur-md border border-primary/20 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group text-center h-full flex flex-col"
                        >
                            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-primary/50 mb-4 group-hover:border-primary transition-colors shrink-0">
                                <img
                                    src={item.member?.photo || `/images/members/${item.name}.jpg`}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: 'top' }}
                                    onError={(e) => e.currentTarget.src = '/images/assets/logo/白色正方形logo.png'}
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                            <div className="text-xl text-primary font-bold mb-1">{item.name}</div>
                            <div className="text-gray-300 text-base mb-4">{item.member?.industry || '待更新'}</div>

                            <div className="border-t border-white/10 pt-4 space-y-2 text-left inline-block w-full text-base mt-auto">
                                <div className="flex flex-col items-center gap-1 text-gray-300 justify-center">
                                    <span className="font-medium text-white text-center">{item.member?.company || '待更新'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 justify-center pt-2">
                                    <Phone size={16} className="text-primary shrink-0" />
                                    <span>{item.member?.phone || '待更新'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 justify-center">
                                    <Mail size={16} className="text-primary shrink-0" />
                                    <span className="text-sm break-all">{item.member?.email || '待更新'}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
