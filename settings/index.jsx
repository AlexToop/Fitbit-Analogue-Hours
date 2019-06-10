function mySettings(props) {
    return (
        <Page>
            <Section
                title={<Text bold align="center">Colour of left-to-minute hand</Text>}>
                <ColorSelect
                    settingsKey="leftColour"
                    colors={[
                        {color: "#334764"},
                        {color: "#2A363B"}
                    ]}
                />
            </Section>
            <Section
                title={<Text bold align="center">Colour of right-to-minute hand</Text>}>
                <ColorSelect
                    settingsKey="rightColour"
                    colors={[
                        {color: "#c4b9a4"},
                        {color: "#FECEA8"},
                        {color: "#dddddd"},
                        {color: "#f57d26"},
                        {color: "#2A363B"}
                    ]}
                />
            </Section>
            <Section
                title={<Text bold align="center">Colour of time and activities</Text>}>
                <ColorSelect
                    settingsKey="timeActivitiesColour"
                    colors={[
                        {color: "#f57d26"},
                        {color: "#E84A5F"}
                    ]}
                />
            </Section>
        </Page>
    );
}

registerSettingsPage(mySettings);

// <Section
//   title={<Text bold align="center">Weather Provider (Default OpenWeatherMap)</Text>}>
//   <Select
//     label={`Provider Selection:`}
//     settingsKey="weather"
//     options={[
//       {name:"OpenWeatherMap"},
//       {name:"Dark Sky"}
//     ]}
//   />
// </Section>