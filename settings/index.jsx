function mySettings(props) {
    let colorSet = [
        {color: "black"},
        {color: "#334764"},
        {color: "#c4b9a4"},
        {color: "#f57d26"},
        {color: "#000000"},
        {color: "#3182DE"},
        {color: "#8080FF"},
        {color: "#14D3F5"},
        {color: "#505050"},
        {color: "#303030"},
        {color: "#00A629"},
        {color: "#00A629"},
        {color: "#5B4CFF"},
        {color: "#BCD8F8"},
        {color: "#A0A0A0"},
        {color: "#B8FC68"},
        {color: "#F80070"},
        {color: "#5BE37D"},
        {color: "#FC6B3A"},
        {color: "#FFCC33"},
        {color: "#F83478"},
        {color: "#A51E7C"},
        {color: "#BD4EFC"},
        {color: "#F83C40"},
        {color: "#7090B5"},
        {color: "#1B2C40"},
        {color: "#D828B8"},
        {color: "#FFFFFF"},
        {color: "#E4FA3C"},
        {color: "#394003"}
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
                        {name: "Numbers and dots"},
                        {name: "Hours and minutes"}
                    ]}
                />
            </Section>
        </Page>
    );
}

registerSettingsPage(mySettings);