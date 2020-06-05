$(document).ready(function () {
	const bloc1 = $(".bloc-don.1");
	const bloc2 = $(".bloc-don.2");
	const bloc3 = $(".bloc-don.3");
	const blocFree = $(".bloc-don-free");
	const btnDon = $(".equivalence-don").find(".button-don");

	const values = {
		once: {
			bloc1: {
				"don-amount": 1,
				"don-soit": 2,
				"don-text": 3,
			},
			bloc2: {
				"don-amount": 1,
				"don-soit": 2,
				"don-text": 3,
			},
			bloc3: {
				"don-amount": 1,
				"don-soit": 2,
				"don-text": 3,
			},
		},
		regular: {
			bloc1: {
				"don-amount": 10,
				"don-soit": "3,40",
				"don-text": "Vous contribuez à nourrir les animaux abandonnés que nous recueillons.",
			},
			bloc2: {
				"don-amount": 15,
				"don-soit": "5,10",
				"don-text":
					"Vous participez à la prise en charge vétérinaire d’animaux blessés ou malades.",
			},
			bloc3: {
				"don-amount": 30,
				"don-soit": "19,20",
				"don-text":
					"Vous financez l’étude comportementale de 5 animaux pour les aider à se remettre du choc de l’abandon.",
			},
		},
	};
	let cid = 0;

	const qs = parseQueryStrings();

	function queryContain(key) {
		if (!qs) return false;
		for (let i = 0; i < qs.length; i++) {
			if (qs[i][0] === key) return qs[i][1];
		}
		return false;
	}

	const reserved_code_media = queryContain("reserved_code_media");

	if (reserved_code_media && reserved_code_media.slice(0, 4) === "W20F") {
		values.once = {
			bloc1: {
				"don-amount": 84,
				"don-soit": 29,
				"don-text": "Vous nourrissez un chien victime d'abandon pendant 6 mois.",
			},
			bloc2: {
				"don-amount": 120,
				"don-soit": 41,
				"don-text": "Vous prenez en charge ses frais vétérinaires pendant 6 mois.",
			},
			bloc3: {
				"don-amount": 160,
				"don-soit": 54,
				"don-text":
					"Vous financez la prise en charge totale d’un chien victime d’abandon pour qu’il soit adopté.",
			},
		};

		cid = 223;
		addOrModifyQueryParameter(bloc1, "cid", "223", "href");
		addOrModifyQueryParameter(bloc2, "cid", "223", "href");
		addOrModifyQueryParameter(bloc3, "cid", "223", "href");
		addOrModifyQueryParameter(btnDon, "cid", "223", "href");
	} else {
		values.once = {
			bloc1: {
				"don-amount": 60,
				"don-soit": 20,
				"don-text": "Prend en charge la nourriture et les soins d’un chat abandonné pendant 2 mois.",
			},
			bloc2: {
				"don-amount": 90,
				"don-soit": 31,
				"don-text":
					"Vous financez l’étude comportementale d’un animal traumatisé par l'abandon pour qu’il retrouve une famille.",
			},
			bloc3: {
				"don-amount": 120,
				"don-soit": 41,
				"don-text": "Permet de soigner pendant 6 mois un chien victime d’abandon . ",
			},
		};

		if (reserved_code_media) {
			addOrModifyQueryParameter(bloc1, "reserved_code_media", reserved_code_media, "href");
			addOrModifyQueryParameter(bloc2, "reserved_code_media", reserved_code_media, "href");
			addOrModifyQueryParameter(bloc3, "reserved_code_media", reserved_code_media, "href");
			addOrModifyQueryParameter(btnDon, "reserved_code_media", reserved_code_media, "href");
		} else {
			addOrModifyQueryParameter(bloc1, "reserved_code_media", "W20PD0ZZL", "href");
			addOrModifyQueryParameter(bloc2, "reserved_code_media", "W20PD0ZZL", "href");
			addOrModifyQueryParameter(bloc3, "reserved_code_media", "W20PD0ZZL", "href");
			addOrModifyQueryParameter(btnDon, "reserved_code_media", "W20PD0ZZL", "href");
		}
		

		cid = 224;
		addOrModifyQueryParameter(bloc1, "cid", "224", "href");
		addOrModifyQueryParameter(bloc2, "cid", "224", "href");
		addOrModifyQueryParameter(bloc3, "cid", "224", "href");
		addOrModifyQueryParameter(btnDon, "cid", "224", "href");
	}

	$("#input-free-amount").on("input", function () {
		const input = $(this).val();

		if (!input || isNaN(input)) return;

		const nb = parseFloat(input);

		const soit = (nb * 0.34).toFixed(2);
		blocFree.find(".soit").children("span").text(soit);

		addOrModifyQueryParameter(btnDon, "free_amount", "1", "href");
		addOrModifyQueryParameter(btnDon, "amount", +nb * 100, "href");
	});

	function updateBloc(bloc, frequency, blocName) {
		bloc.find(".don-amount").children("span").text(values[frequency][blocName]["don-amount"]);
		bloc.find(".soit").children("span").text(values[frequency][blocName]["don-soit"]);
		bloc.find(".don-text").text(values[frequency][blocName]["don-text"]);

		addOrModifyQueryParameter(
			bloc,
			"amount",
			+values[frequency][blocName]["don-amount"] * 100,
			"href"
		);
	}

	function updatePrices(frequency) {
		addOrModifyQueryParameter(bloc1, "frequency", frequency, "href");
		addOrModifyQueryParameter(bloc2, "frequency", frequency, "href");
		addOrModifyQueryParameter(bloc3, "frequency", frequency, "href");
		addOrModifyQueryParameter(btnDon, "frequency", frequency, "href");

		updateBloc(bloc1, frequency, "bloc1");
		updateBloc(bloc2, frequency, "bloc2");
		updateBloc(bloc3, frequency, "bloc3");
		if (frequency === "once") {
			addOrModifyQueryParameter(bloc1, "cid", cid, "href");
			addOrModifyQueryParameter(bloc2, "cid", cid, "href");
			addOrModifyQueryParameter(bloc3, "cid", cid, "href");
			addOrModifyQueryParameter(btnDon, "cid", cid, "href");
		} else if (frequency === "regular") {
			addOrModifyQueryParameter(bloc1, "cid", "227", "href");
			addOrModifyQueryParameter(bloc2, "cid", "227", "href");
			addOrModifyQueryParameter(bloc3, "cid", "227", "href");
			addOrModifyQueryParameter(btnDon, "cid", "227", "href");
		}
	}

	$('input[name="frequency"]').on("change", function () {
		updatePrices($(this).val());
	});

	$('input[name="frequency"].1').prop("checked", "true").trigger("change");
});
