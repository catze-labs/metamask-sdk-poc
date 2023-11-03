import { MetaMaskSDKOptions } from "@metamask/sdk";
import { http, createConfig } from "wagmi";
import { mainnet, oasys } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [mainnet, oasys],
  transports: {
    [mainnet.id]: http(),
    [oasys.id]: http(),
  },
});

export const metamaskSDKOptions: MetaMaskSDKOptions = {
  dappMetadata: {
    name: "Yooldo",
    url: "https://app.yooldo.gg/",
    base64Icon:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAjCAYAAAATx8MeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7Vg9TFNRFD6PYuwAtps/CaGDwQETGouLDtXYQROqCRARTapGBRet0q7V2o62BnAxINHgQDRoojg4aIIObg4YXVigYuxoK45gPd8117R9972+98S0A1/S9DXnvXu+e853zj19GjG2bA9ES0RJvvRSHaERLf8q0XWNvH5v81bXd2ocFJrc7vpGRwFvEzUgGpJUs5mxa28HZVMxam/bKX7nVvI0/fglf+bIDoIHApSID1Wsc3dihp6/mifbpEDoYvQWLa98E7/b23bR0wcZcW2VGJ6ZGrtJod7LunXevv9AhR+rumcM09fV2SF2JBcCcnwd6humq5cGRRSdEJLrIErBgwHlc4akcl/zHPZ95OOFy1EorlLf+biIYrWtGogG0lROSCIy0EMLnxbJFik4v8Cpm+WFvdtaKwmzk9iNrNImAQ294GiodIMNPWJtqsiakgKQc2gnmx7R2bDL8ckZmn2Y0dmuDA2KKKYyE0qb19OqtFkiBcBxsfhT7LwaIPyRyZXboKMoay6WyOruh+3sybDSZosUMMKpQllHBsI62xiThk06lcKuriqkGRrrZz2qKs42KQCLqaoOgpW6MRN2Nh2j6SdzhjpyREpW3dRo8m/VIXInjh4SRMyEDVuRnx/n+6xAc+/w+9ZKriWyCNnlkQ6kAc01fCxI/s49XK1J3f1I6Ztn92j3/uNkFbZJSSBaSIV02n3kjE4rsnMj9VbSJuH4QJaE4FQlbACtBNVrh9A/kQJQaWnuNyqn0BHahd3DG2gmh4DTd9xcVcJGi0ABdIdOkxM4IoWuDMH3n4vrbEgpCENHTmGblOzKod5hpR0plb0KFRo51UMe/v4zi1lLpa3qq1VNiBD/IxHnGu59zVVZPkmI0adqjFHBltDNhA0NQUvyoK0mJDd1n9eoBcukzIQNZ9AZGikAckazFmxG446EJU3hODESNoCo2GmQGF3MDmVLkcKhG0/cUdoQQQxs5VPkwudFQ6fQ1YZoCoex/CdSSTasHOZwf/q2eohLZSapFixVn5yTsPvcl7z4hi6gD7O0gTTGHY+nRbQEFAmm2Q0hJSGHOQmkrNbA5gSOp4T/ic13CVaBUwEvzZb4pZmPGgGaNi+ap0tbP7xecl0jrclDdUSJSrkW99rob4PBs9bbbLnZAAAAAElFTkSuQmCC",
  },
};
