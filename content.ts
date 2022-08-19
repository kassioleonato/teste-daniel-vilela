import { ThemeTypings } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiAward, FiCalendar, FiShield, FiSmile } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

type Content = {
  nameAPI: string;
  head: {
    metaDescription: string;
    title: string;
  };
  social: {
    whatsAppNumber: string;
    instagramLink: string;
    email?: string;
  };
  hero: {
    title: string;
    titleHighlighted: string;
  };
  features: {
    title: string;
    items: Array<{
      icon: IconType;
      title: string;
      content: string;
    }>;
  };
  presentation: {
    title: string;
    content: string;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  testimonials?: Array<{
    content: string;
    clientName: string;
    clientDescription: string;
  }>;
  cta: {
    title: string;
    content: string;
  };
  footer: {
    address: string;
    addressLink: string;
  };
  colors: {
    buttonCollor: string;
    scheme: ThemeTypings["colorSchemes"];
    primaryLight: string;
    primary: string;
    primaryDark: string;
  };
};

const content: Content = {
  nameAPI: "daniel-vilela",
  head: {
    metaDescription: "Site do Dr. Daniel Vilela",
    title: "Dr. Daniel Vilela",
  },
  social: {
    whatsAppNumber: "5583981820066",
    instagramLink: "https://www.instagram.com/dr.danielmartinss/",
    email: "danielvilelamartins@gmail.com",
  },
  hero: {
    title: "Te ajudo a viver sem dor abdominal.",
    titleHighlighted: "Endoscopia Digestiva",
  },
  features: {
    title: "Informações",
    items: [
      {
        icon: FiShield,
        title: "Prevenção e Tratamento",
        content:
          "Atuação focada em diagnosticar e prevenir as dores abdominais.",
      },
      {
        icon: HiOutlineLocationMarker,
        title: "Localização",
        content:
          "Rua Delmiro Gouvêia, 369 - 5 andar Centenário, Campina Grande - PB, Brasil. Localizado em frente ao hospital Antônio Targino.",
      },
      {
        icon: FiAward,
        title: "Atuação na endoscopia",
        content:
          "O exame de endoscopia é capaz de diagnosticar inúmeras doenças do trato gastrointestinal superior. Entre as principais doenças estão: tumores, esofagites, refluxo gastroesofágico, gastrites, duodenites, úlceras e a bactéria Helicobater pylori.",
      },
    ],
  },
  presentation: {
    title: "Dr. Daniel Vilela",
    content: `
Sou formado na Universidade Federal de Campina Grande (UFCG) com residência médica em Cirurgia Geral e Endoscopia Digestiva pela Faculdade de Medicina de São José do Rio Preto (FAMERP-SP). 
Em 2012 tive o prazer de me mudar para rainha da Borborema, Campina Grande - PB e desde então sou apaixonado pela cidade e pelo povo paraibano. 
Sou muito grato a Paraíba, pois aqui eu conheci a minha querida esposa Ana Catarina, me tornei pai do Fefê e pude realizar o sonho de ser médico.
Voltamos para Campina Grande em 2022 após o término da minha formação médica em São José do Rio Preto- SP com a ideia de trazer uma consulta focada no paciente com atenção aos detalhes e com objetivo de trazer a melhor experiência possível.`,
  },
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        question: "Como é realizada endoscopia?",
        answer:
          "É realizada com o paciente em jejum absoluto de no mínimo 8 horas. O exame é feito sob sedação leve e através dele é possível diagnosticar doenças como gastrites, erosões, úlceras, varizes, póplipos e tumores. Durante a endoscopia o especialista já realiza biópsias quando necessário.",
      },
      {
        question: "Com qual idade devemos fazer a primeira colonoscopia?",
        answer:
          "Atualmente a recomendação é realizar a primeira colonoscopia aos 45 anos ou 10 anos antes da idade do diagnóstico de câncer de intestino em parentes de primeiro grau(pai, mãe, irmãos).",
      },
      {
        question:
          "Como é feito o tratamento é o diagnóstico da bactéria Helicobacter pylori?",
        answer: `O diagnóstico é feito através da endoscopia digestiva alta com biópsia ou teste da urease, teste respiratório ou antígeno fecal.
O tratamento é realizado com antibióticos e inibidores da bomba de prótons como o omeprazol por 14 dias.`,
      },
      {
        question: "Qual o tratamento para excesso de gases?",
        answer: `Primeiro precisamos avaliar a causa. As principais causas são: intolerância alimentar como a intolerância à lactose e a doença celíaca, constipação crônica, parasitoses, supercrescimento bacteriano, alimentação inadequada.
Após o diagnóstico da causa o tratamento será focado em eliminar os gases.`,
      },
      {
        question: "Como é feito o preparo para colonoscopia?",
        answer:
          "Um dia antes do exame é passado uma dieta pastosa, hidratação, e remédios para limpar o intestino. É importante ressaltar que você não vai passar fome durante o preparo.",
      },
    ],
  },
  testimonials: [
    {
      content: `Dr Daniel tirou todas minhas dúvidas e me ajudou da melhor forma encontrar melhor tratamento para meu problema.
        Atencioso, claramente é visto que é bom médico não só pelo seu conhecimento, mas tbm pelo seu atendimento e amor pelo que faz.`,
      clientName: "Mariele Bernardo",
      clientDescription: "",
    },
    {
      content:
        "Esse é o melhor consultório de especialista que já conheci. Recomendo muito. São atenciosos e o Dr. Daniel é um homem que procura entender o paciente de uma forma muito humana. Passei em vários médicos pelo mesmo problema é só aqui consegui resolver e compreender o que eu tinha. Desejo o melhor e que o Senhor o abençoe muito.",
      clientName: "Débora S. Moraes",
      clientDescription: "",
    },
    {
      content: `Passando para indicar o Doutor Daniel Vilela Martins,um médico muito profissional e sua esposa um casal maravilhoso.
Um atendimento excelente,a primeira vez que vi uma preocupação com paciente como eles tiveram comigo recebi mensagens para saber como eu estava.
Eu estava com muitas dores graças a eles e a Deus tô bem melhor. Deus continue abençoando vocês`,
      clientName: "Gabriela Rodrigues",
      clientDescription: "",
    },
    {
      content: `Um médico extraordinário, altamente capacitado no que faz. Não tenho palavras para descrever o quanto ele merece, chegou em campina grande para fazer a diferença no atendimento aos seus pacientes, super indico. Dr Daniel, muito obrigada por esse atendimento diferenciado 👏👏👏👏👏`,
      clientName: "Cinthya Soares",
      clientDescription: "",
    },
    {
      content: `Um ser humano fantástico. Muita atenção e fraternidade com o paciente.`,
      clientName: "Wilton Freitas",
      clientDescription: "",
    },
    {
      content: `Um grande Doutor! Se humano exemplar, trata seus pacientes com dignidade. Deus continua lhe abençoando Doutor`,
      clientName: "Guterlandio Nascimento",
      clientDescription: "",
    },
  ],
  cta: {
    title: "Como posso te ajudar?",
    content: `De início, serão ouvidas suas queixas, dores e sintomas. Posteriormente, será feita uma análise completa da sua vida atual (hábitos alimentares, estilo de vida, ansiedade, histórico familiar), avaliando sua saúde de forma completa, através de um diagnóstico personalizado.

É importante que você leve os exames anteriores na primeira consulta. Caso exista a necessidade, outros exames complementares serão solicitados de acordo com sua necessidade a fim de garantir o melhor diagnóstico e o melhor tratamento para você.

Durante todo o tratamento você vai ter e o suporte da nossa equipe para agendamento de exames e poderá tirar as suas dúvidas com o Dr. Daniel se for necessário.`,
  },
  footer: {
    address:
      "Rua Delmiro Gouvêia, 369 - 5 andar Centenário, Campina Grande - PB, Brasil. Localizado em frente ao hospital Antônio Targino.",
    addressLink:
      "https://www.google.com/maps/place/R.+Delmiro+Gouv%C3%AAia,+369+-+Centen%C3%A1rio,+Campina+Grande+-+PB,+58400-422/data=!4m2!3m1!1s0x7ac1e3eaefeaba9:0x679ed9b26f8515f2?sa=X&ved=2ahUKEwjVjfzxtfb4AhXkDdQKHQF7BCMQ8gF6BAgWEAE",
  },
  colors: {
    buttonCollor: "#099FA4",
    scheme: "green",
    primaryLight: "lightgreen",
    primary: "#1087A3",
    primaryDark: "#196FA2",
  },
};

export default content;
