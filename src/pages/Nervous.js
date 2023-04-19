

import './pages.css';

function Nervous() {
  return (
    <div className="container nervous">
       <h1>What are the parts of the nervous system?</h1>
       <img src={require('../images/nervous-system.jpeg')} className="pages-img"/>
        <p>The nervous system has two main parts:</p>

        <p>The central nervous system is made up of the brain and spinal cord.
        The peripheral nervous system is made up of nerves that branch off from the spinal cord and extend to all parts of the body.</p>
        <p>The nervous system transmits signals between the brain and the rest of the body, including internal organs. In this way, the nervous system’s activity controls the ability to move, breathe, see, think, and more</p>
        <p>The basic unit of the nervous system is a nerve cell, or neuron. The human brain contains about 100 billion neurons. A neuron has a cell body, which includes the cell nucleus, and special extensions called axons (pronounced AK-sonz) and dendrites (pronounced DEN-drahytz). Bundles of axons, called nerves, are found throughout the body. Axons and dendrites allow neurons to communicate, even across long distances.</p>
        <p>Different types of neurons control or perform different activities. For instance, motor neurons transmit messages from the brain to the muscles to generate movement. Sensory neurons detect light, sound, odor, taste, pressure, and heat and send messages about those things to the brain. Other parts of the nervous system control involuntary processes. These include keeping a regular heartbeat, releasing hormones like adrenaline, opening the pupil in response to light, and regulating the digestive system.</p>
        <p>When a neuron sends a message to another neuron, it sends an electrical signal down the length of its axon. At the end of the axon, the electrical signal changes to a chemical signal. The axon then releases the chemical signal with chemical messengers called neurotransmitters (pronounced noor-oh-TRANS-mit-erz) into the synapse (pronounced SIN-aps)—the space between the end of an axon and the tip of a dendrite from another neuron. The neurotransmitters move the signal through the synapse to the neighboring dendrite, which converts the chemical signal back into an electrical signal. The electrical signal then travels through the neuron and goes through the same conversion processes as it moves to neighboring neurons.</p>
    </div>
  );
}

export default Nervous;