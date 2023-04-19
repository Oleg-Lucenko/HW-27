

import './pages.css';

function Lymphatic() {
  return (
    <div className="container lymphatic">
       <h1>Lymphatic system</h1>
       <img src={require('../images/system-head-neck.webp')} className="pages-img"/>
        <p>lymphatic system, a subsystem of the circulatory system in the vertebrate body that consists of a complex network of vessels, tissues, and organs. The lymphatic system helps maintain fluid balance in the body by collecting excess fluid and particulate matter from tissues and depositing them in the bloodstream. It also helps defend the body against infection by supplying disease-fighting cells called lymphocytes. This article focuses on the human lymphatic system.</p>
        <h2>Lymphatic circulation</h2>
        <p>The lymphatic system can be thought of as a drainage system needed because, as blood circulates through the body, blood plasma leaks into tissues through the thin walls of the capillaries. The portion of blood plasma that escapes is called interstitial or extracellular fluid, and it contains oxygen, glucose, amino acids, and other nutrients needed by tissue cells. Although most of this fluid seeps immediately back into the bloodstream, a percentage of it, along with the particulate matter, is left behind. The lymphatic system removes this fluid and these materials from tissues, returning them via the lymphatic vessels to the bloodstream, and thus prevents a fluid imbalance that would result in the organism’s death.
        The fluid and proteins within the tissues begin their journey back to the bloodstream by passing into tiny lymphatic capillaries that infuse almost every tissue of the body. Only a few regions, including the epidermis of the skin, the mucous membranes, the bone marrow, and the central nervous system, are free of lymphatic capillaries, whereas regions such as the lungs, gut, genitourinary system, and dermis of the skin are densely packed with these vessels. Once within the lymphatic system, the extracellular fluid, which is now called lymph, drains into larger vessels called the lymphatics. These vessels converge to form one of two large vessels called lymphatic trunks, which are connected to veins at the base of the neck. One of these trunks, the right lymphatic duct, drains the upper right portion of the body, returning lymph to the bloodstream via the right subclavian vein. The other trunk, the thoracic duct, drains the rest of the body into the left subclavian vein. Lymph is transported along the system of vessels by muscle contractions, and valves prevent lymph from flowing backward. The lymphatic vessels are punctuated at intervals by small masses of lymph tissue, called lymph nodes, that remove foreign materials such as infectious microorganisms from the lymph filtering through them.</p>
        <h2>Role in immunity</h2>
        <p>In addition to serving as a drainage network, the lymphatic system helps protect the body against infection by producing white blood cells called lymphocytes, which help rid the body of disease-causing microorganisms. The organs and tissues of the lymphatic system are the major sites of production, differentiation, and proliferation of two types of lymphocytes—the T lymphocytes and B lymphocytes, also called T cells and B cells. Although lymphocytes are distributed throughout the body, it is within the lymphatic system that they are most likely to encounter foreign microorganisms.</p>
    </div>
  );
}

export default Lymphatic;