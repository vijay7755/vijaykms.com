import React, { useState } from "react"
import { motion } from "framer-motion"

import { Instagram, GitHub, Medium, LinkedIn } from "components/svgs"
import { primeTheme } from "styles/themes"


const SocialLinks = ({ site, link, hoverColor, delay }) => {
    // const delay = +(+(animeDuration) * 0.2).toFixed(1) + 2.8
    const [socialIconFill, setSocialIconFill] = useState(primeTheme.primary)

    const renderIcon = () => {
        switch (site) {
            case "instagram":
                return <Instagram width={30} height={30} fill={socialIconFill} />
            case "linkedin":
                return <LinkedIn width={30} height={30} fill={socialIconFill} />
            case "github":
                return <GitHub width={30} height={30} fill={socialIconFill} />
            case "medium":
                return <Medium width={30} height={30} fill={socialIconFill} />
        }
    }
    return (
        <motion.a
            initial={{ transform: "scale(0)" }}
            animate={{ scale: [0, 1, 1.3, 1] }}
            transition={{ type: "spring", duration: 1, delay: delay }}
            target="_blank"
            href={link}
            onMouseOver={() => setSocialIconFill(hoverColor ? hoverColor : primeTheme.dark)}
            onMouseOut={() => setSocialIconFill(primeTheme.primary)}
        >
            {renderIcon()}
        </motion.a>
    )
}

export default SocialLinks
