function capitaliseWithSpacing(string) {
    if (string === "drsDetectionZones") {
        return "DRS Detection Zones"
    } else if (string === "drsZones") {
        return "DRS Zones"
    }
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/([A-Z])/g, ' $1');
}

export default capitaliseWithSpacing;