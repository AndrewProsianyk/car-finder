import Accordeon from "../accordeon/Accordeon";
import CarFeaturesList from "../carFeaturesList/CarFeaturesList";
import CarPageSection from "../carPageSection/CarPageSection";
import styles from "./CarFeatures.module.scss";

const interiorFeatures = [
  "Multi-Zone A/C",
  "Heated Front Seats",
  "Adjustable Steering Wheel",
  "Intermittent Wipers",
  "Auto-Dimming Rearview Mirror",
  "Leather Seats",
  "Climate Control",
  "Leather Steering Wheel",
  "Driver Adjustable Lumbar",
  "Pass-Through Rear Seat",
  "Driver Illuminated Vanity Mirror",
  "Passenger Adjustable Lumbar",
  "Universal Garage Door Opener",
  "Passenger Illuminated Visor Mirror",
  "Steering Wheel Audio Controls",
  "Power Door Locks",
];

const exteriorFeatures = [
  "Alloy Wheels",
  "Daytime Running Lights",
  "Fog Lamps",
  "Heated Mirrors",
  "Power Mirror(s)",
  "Rear Spoiler",
  "Sun/Moonroof",
  "Temporary Spare Tire",
  "Tow Hooks",
  "Variable Speed Intermittent Wipers",
  "Privacy Glass",
  "LED Headlights",
  "Power Liftgate",
  "Automatic Headlights",
  "Integrated Turn Signal Mirrors",
];

const safetyFeatures = [
  "Back-Up Camera",
  "Blind Spot Monitor",
  "Brake Assist",
  "Cross-Traffic Alert",
  "Driver Air Bag",
  "Passenger Air Bag",
  "Front Side Air Bag",
  "Lane Departure Warning",
  "Lane Keeping Assist",
  "Rear Parking Aid",
  "Stability Control",
  "Traction Control",
  "Tire Pressure Monitor",
  "Electronic Stability Control",
  "Anti-Lock Brakes (ABS)",
];

const technologyFeatures = [
  "Navigation System",
  "Bluetooth Connection",
  "Smart Device Integration",
  "Apple CarPlay",
  "Android Auto",
  "Auxiliary Audio Input",
  "HD Radio",
  "Premium Sound System",
  "Satellite Radio",
  "WiFi Hotspot",
  "Remote Start",
  "Keyless Start",
  "Hands-Free Liftgate",
  "USB Ports",
];

export default function CarFeatures() {
  return (
    <CarPageSection title="Features">
      <Accordeon title="Interior" theme="light">
        <CarFeaturesList data={interiorFeatures} />
      </Accordeon>
      <Accordeon title="Exterior" theme="light">
        <CarFeaturesList data={exteriorFeatures} />
      </Accordeon>
      <Accordeon title="Safety" theme="light">
        <CarFeaturesList data={safetyFeatures} />
      </Accordeon>
      <Accordeon title="Technology" theme="light">
        <CarFeaturesList data={technologyFeatures} />
      </Accordeon>
    </CarPageSection>
  );
}
