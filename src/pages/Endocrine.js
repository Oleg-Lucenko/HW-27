import './pages.css';

function Respiratory() {
  return (
    <div className="container endocrine">
       <h1>Why are Hormones Important?</h1>
        <p>Hormones act as chemical messengers that are released into the blood stream to act on an organ in another part of the body. Although hormones reach all parts of the body, only target cells with compatible receptors are equipped to respond. Over 50 hormones have been identified in humans and other verterbrates. </p>
        <p>Hormones control or regulate many biological processes and are often produced in exceptionally low amounts within the body. Examples of such processes include:</p>
        <p>blood sugar control (insulin);
            differentiation, growth, and function of reproductive organs (testosterone and estradiol); 
            and body growth and energy production (growth hormone and thyroid hormone).</p>
        <p>Much like a lock and key, many hormones act by binding to receptors that are produced within cells. When a hormone binds to a receptor, the receptor carries out the hormone's instructions, either by altering the cell's existing proteins or turning on genes that will build a new protein. The hormone-receptor complex switches on or switches off specific biological processes in cells, tissues, and organs.</p>
        <img src={require('../images/endocrine-system.jpeg')} className="pages-img"/>
        <p>Hypothalamus - The hypothalamus links our endocrine and nervous systems together. The hypothalamus drives the endocrine system.</p>
        <p>Pituitary gland - The pituitary gland receives signals from the hypothalamus. This gland has two lobes, the posterior and anterior lobes. The posterior lobe secretes hormones that are made by the hypothalamus. The anterior lobe produces its own hormones, several of which act on other endocrine glands.
        Thyroid gland - The thyroid gland is critical to the healthy development and maturation of vertebrates and regulates metabolism.
        Adrenal glands - The adrenal gland is made up of two glands: the cortex and medulla. These glands produce hormones in response to stress and regulate blood pressure, glucose metabolism, and the body's salt and water balance.
        Pancreas - The pancreas is responsible for producing glucagon and insulin. Both hormones help regulate the concentration of glucose (sugar) in the blood.
        Gonads - The male reproductive gonads, or testes, and female reproductive gonads, or ovaries, produce steroids that affect growth and development and also regulate reproductive cycles and behaviors. The major categories of gonadal steroids are androgens, estrogens, and progestins, all of which are found in both males and females but at different levels.</p>
    </div>
  );
}

export default Respiratory;