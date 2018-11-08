import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from '../template/card'

export default props => (
    <section className='container' id='biography'>
        <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
                <h2>Sobre mim</h2>
            </Col>
        </Row>
        <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card className='card biography'
                src={require('../imgs/taruma.jpg')}
                link='https://en.wikipedia.org/wiki/Tarum%C3%A3'
                title='Minha história'
                text='Nasci em Tarumã-SP, pequena cidade do interior de São Paulo.
                    Durante o Ensino Médio e Técnico comecei aumentar meus contatos devido
                    às viagens diárias para Assis-SP, aos poucos fui conhecendo mais sobre o mundo que viria
                    junto com a universidade. Viver nessas duas cidades e cursar o Ensino Médio na escola onde cursei
                    foram fatores fundamentais para construir minha personalidade e caráter, aprendendo a unir minha
                    curiosidade por novos conhecimentos com o respeito aos demais cidadãos de onde vivo e sempre buscar
                    um meio de melhorar a comunidade onde hábito através de minhas ações'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card className='card biography'
                src={require('../imgs/vsm.png')}
                link='http://www.vsm.com.br/'
                title='Experiência Profissional - VSM'
                text='Trabalhei como Analista de Suporte Trainee durante 9 meses na VSM, empresa com software desktop voltada
                para o ramo farmacêutico. Desde que entrei na universidade buscava vagas em empresas de tecnologia para o setor de desenvolvimento, porém
                exercer o cargo de suporte nessa empresa foi uma experiência marcante. A primeira foi entender como funciona o relacionamento entre os diferentes
                setores de uma empresa de médio porte. Outras habilidades e competências que desenvolvi nesse emprego foram a comunicação, raciocínio, estratégias de negócio, processos de desenvolvimento
                as melhores maneiras de se entender a regra de negócio de um sistema e habilidade de buscar pelas causas de erros e elaborar relatórios.'>
                </Card>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
                <Card className='card biography'
                title='Experiência Profissional - Forlogic'
                src={require('../imgs/forlogic.png')}
                link='http://www.forlogic.net/'
                text='Emprego no qual me encontro atualmente como Desenvolvedor Web. Posso dizer que das 3 experiências profissionais que tive na vida, está sendo disparadamente a melhor.
                    Desde que saí do curso Técnico em Informática buscava um emprego onde pudesse desenvolver softwares (obviamente) e sentir os resultados das minhas ações melhorar o cotidiano de diversas pessoas.
                    Além desse sentimento de significar, também possuo autonomia das decisões dos futuros projetos, módulos e funcionalidades e para isso preciso estar consciente dos processos da empresa que visa qualidade 
                    como um requisito básico do dia-a-dia. Nos 3 meses que estou na empresa tenho notado melhoras constantes em conhecimento técnico, gerenciamento de pequenos projetos e tarefas, além do conhecimento de diferentes normas e padrões de qualidade do processo. '>
                </Card>
            </Col>
        </Row>
    </section>
);
