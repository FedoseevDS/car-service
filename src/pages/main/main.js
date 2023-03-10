import Layout from "../../components/common/layout/layout";
import "./styles.scss";

const Main = () => (
  <Layout>
    <div className="mainWrapper">
      <div className="mainBody">
        <div>
          <div>ОБСЛУЖИВАНИЕ В АВТОСЕРВИСЕ</div>
          <div>
            Внезапно, интерактивные прототипы объединены в целые кластеры себе
            подобных. Не следует, однако, забывать, что постоянное
            информационно-пропагандистское обеспечение нашей деятельности, в
            своём классическом представлении, допускает внедрение направлений
            прогрессивного развития. Но социально-экономическое развитие
            напрямую зависит от направлений прогрессивного развития. 
          </div>
          <ul>
            <li>10% СКИДКА на первое посещение</li>
            <li>Собственный склад-магазин</li>
            <li>Онлайн запись</li>
            <li>Профессиональные мастера</li>
            <li>Без очередей</li>
            <li>Профессиональное оборудование</li>
          </ul>
        </div>
        <div className="mainRightPanel">
          <div>Виды работ</div>
          <div>Виды работ 1</div>
          <div>Виды работ 2</div>
          <div>Виды работ 3</div>
          <div>Виды работ 4</div>
          <div>Виды работ 5</div>
        </div>
      </div>
      <div className="mainDownPanel">
        <div>Техническое обслуживание</div>
        <div>Ремонт Кпп и ДВС</div>
        <div>Диагностика</div>
      </div>
      <div className="mainFooter">Адрес, контакты с привязкой к карте</div>
    </div>
  </Layout>
);

export default Main;
