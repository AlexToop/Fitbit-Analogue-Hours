function mySettings(props) {
    let colorSet = [
        {color: "black"}, {color: "#334764"}, {color: "#2A363B"}, {color: "#A6AEAC"}, {color: "#c4b9a4"}, {color: "#E2B292"}, {color: "#f57d26"}, {color: "#E84A5F"},  {color: "#DE2626"}, {color: "#F8F8FF"}, {color: "#488214"}, {color: "#00BFFF"}, {color: "#000000"}, {color: "#000000"}, {color: "#4682B4"}, {color: "#ADD8E6"}, {color: "#20B2AA"}, {color: "#d2b48c"}, {color: "#8B4513"}, {color: "#696969"}, {color: "#000080"}
    ];
    return (
        <Page>
            <Section
                title={<Text bold align="center">Colour of left-to-minute hand (Usually dark)</Text>}>
                <ColorSelect
                    settingsKey="leftColour"
                    colors={colorSet}
                />
            </Section>
            <Section
                title={<Text bold align="center">Colour of right-to-minute hand (Usually light)</Text>}>
                <ColorSelect
                    settingsKey="rightColour"
                    colors={colorSet}
                />
            </Section>
            <Section
                title={<Text bold align="center">Colour of time and activities</Text>}>
                <ColorSelect
                    settingsKey="timeActivitiesColour"
                    colors={colorSet}
                />
            </Section>
            <Section
                title={<Text bold align="center">Number style</Text>}>
                <Select
                    label={`Select style:`}
                    settingsKey="numbersStyle"
                    options={[
                        {name: "All numbers"},
                        {name: "Numbers and dots"}
                    ]}
                />
            </Section>
        </Page>
    );
}

registerSettingsPage(mySettings);