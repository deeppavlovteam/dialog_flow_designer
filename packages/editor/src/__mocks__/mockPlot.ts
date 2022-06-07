import type { Plot } from "@dialog-flow-designer/shared-types/df-parser-server";

export default <Plot>{
  flows: {
    "id#fl_af394d02": {
      name: "greeting_flow",
      nodes: ["id#nd_fb1d30cf", "id#nd_5cc9ff2e", "id#nd_96446549", "id#nd_a8567873"],
    },
    "id#fl_b58ab8f4": {
      name: "global_flow",
      nodes: ["id#nd_8f66551d", "id#nd_e273992f", "id#nd_e17029d5"],
    },
    "id#fl_cb75203f": {
      name: "music_flow",
      nodes: ["id#nd_d986c521", "id#nd_bef82d7b", "id#nd_81f4d274", "id#nd_7f204f54"],
    },
  },
  imports: {
    "id#im_2818851e": { code: "from typing import Any", name: "Any" },
    "id#im_28ae5db9": { code: "import df_engine.conditions as cnd", name: "cnd" },
    "id#im_303a98e8": {
      code: "from df_engine.core.keywords import TRANSITIONS",
      comment: "# this is a very first comment",
      name: "TRANSITIONS",
    },
    "id#im_6a6cb810": { code: "from df_engine.core import Context", name: "Context" },
    "id#im_981c6fbb": { code: "import re", name: "re" },
    "id#im_a3deb06b": { code: "from df_engine.core.keywords import RESPONSE", name: "RESPONSE" },
    "id#im_ae9e49ec": {
      code: "from df_engine.core.keywords import PROCESSING",
      name: "PROCESSING",
    },
    "id#im_c25b5a7d": { code: "from df_engine.core.keywords import GLOBAL", name: "GLOBAL" },
    "id#im_c57e8d76": {
      code: "from df_engine.core.types import NodeLabel3Type",
      name: "NodeLabel3Type",
    },
    "id#im_d36f5b76": { code: "from df_engine.core.keywords import LOCAL", name: "LOCAL" },
    "id#im_d3a3c378": { code: "from df_engine.core import Actor", name: "Actor" },
    "id#im_ebe22af9": { code: "from df_engine.core.keywords import MISC", name: "MISC" },
    "id#im_f139a630": { code: "import df_engine.labels as lbl", name: "lbl" },
    "id#im_fc7c264b": {
      code: "import df_engine.responses as rsp",
      comment: "# this is test comment\n# this is another one",
      name: "rsp",
    },
  },
  linking: {
    "id#ln_012780c6": { object: "id#df_f90d064f" },
    "id#ln_028f11d1": { object: "id#df_f90d064f" },
    "id#ln_02f3e12c": { object: "id#df_c9ff04d9" },
    "id#ln_03f6bc97": { args: ["0.5"], object: "id#df_10998fcb" },
    "id#ln_08c95fe3": { args: ['r"talk about music"'], object: "id#df_d53d93a5" },
    "id#ln_0b63b760": { args: ['r"how are you"'], object: "id#df_d53d93a5" },
    "id#ln_0e8a39d3": { args: ['r"back"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_1738c6a0": {
      args: ['r"repeat"', "id#df_a5e0bc93"],
      object: "id#df_d53d93a5",
      parent: "id#ln_38f824e1",
    },
    "id#ln_194c2279": { object: "id#df_f02b24b1" },
    "id#ln_1a92c5fc": { object: "id#df_ce293ba3" },
    "id#ln_1b8af782": { object: "id#df_10998fcb" },
    "id#ln_1ddb4d76": { object: "id#df_f69ffc34" },
    "id#ln_220e751f": { object: "id#df_f69ffc34" },
    "id#ln_2b9ad1df": { object: "id#df_f90d064f" },
    "id#ln_2f403b88": { args: ['r"next"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_34e9b98d": { args: ['r"next"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_35393354": { args: ['r"next"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_362f6aff": { args: ["0.2"], object: "id#df_f90d064f" },
    "id#ln_38b11745": { object: "id#df_10998fcb" },
    "id#ln_38f824e1": { args: [["id#ln_1738c6a0", "id#ln_69a17b01"]], object: "id#df_f4fc882f" },
    "id#ln_3c3dc7f7": {
      kwargs: { labels: ['[("music_flow", i) for i in ["node2", "node3"]]'] },
      object: "id#df_91cfb554",
      parent: "id#ln_67e313ad",
    },
    "id#ln_3cbd8900": { args: ['r"hi|hello"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_3cde4531": { object: "id#df_f02b24b1" },
    "id#ln_3f60e4f2": { args: ['r"previous"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_406cc777": { args: ['r"previous"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_40ca58bc": { args: ['"l2_local"'], object: "id#df_258094b8" },
    "id#ln_5794f138": { object: "id#df_f02b24b1" },
    "id#ln_59ff1f41": { object: "id#df_ce293ba3" },
    "id#ln_5b21aeff": {
      args: [['"Hi, what is up?"', '"Hello, how are you?"']],
      object: "id#df_95f6604e",
    },
    "id#ln_5bf91c95": { args: ['"l1_global"'], object: "id#df_258094b8" },
    "id#ln_65654a9a": { object: "id#df_f69ffc34" },
    "id#ln_67e313ad": { args: [["id#ln_9f4fff73", "id#ln_3c3dc7f7"]], object: "id#df_f4fc882f" },
    "id#ln_69a17b01": {
      args: ["id#ln_a05d7408"],
      object: "id#df_27f82e0e",
      parent: "id#ln_38f824e1",
    },
    "id#ln_6b204b87": { object: "id#df_10998fcb" },
    "id#ln_72b3b3f7": { args: ['r"next time"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_75c30025": { object: "id#df_f69ffc34" },
    "id#ln_7768c38a": { args: ['r"talk about music"'], object: "id#df_d53d93a5" },
    "id#ln_7d2ccd6b": { args: ['r"talk about music"'], object: "id#df_d53d93a5" },
    "id#ln_7d43bf50": { object: "id#df_10998fcb" },
    "id#ln_7ff88591": { object: "id#df_f02b24b1" },
    "id#ln_8000208a": { args: ['"greeting_flow"', '"node4"'], object: "id#df_bd2cda2f" },
    "id#ln_81b8c9a3": { args: ['r"yes|yep|ok"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_82b4339f": { args: ['r"talk about music"'], object: "id#df_d53d93a5" },
    "id#ln_84d0157d": { args: ['"l3_local"'], object: "id#df_258094b8" },
    "id#ln_89a5267f": { object: "id#df_f02b24b1" },
    "id#ln_974ac083": { object: "id#df_5c138e3b" },
    "id#ln_9d560799": { args: ['r"hi|hello"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_9f4fff73": { args: ['r"next\\b"'], object: "id#df_d53d93a5", parent: "id#ln_67e313ad" },
    "id#ln_a05d7408": {
      kwargs: { flow_labels: ['"global_flow"'] },
      object: "id#df_91cfb554",
      parent: "id#ln_69a17b01",
    },
    "id#ln_a2b48377": { args: ["0.1"], object: "id#df_f69ffc34" },
    "id#ln_ac1b124d": { object: "id#df_10998fcb" },
    "id#ln_b5fbf2d5": { object: "id#df_f02b24b1" },
    "id#ln_b82cd602": { args: ['"l2_global"'], object: "id#df_258094b8" },
    "id#ln_c391b856": { args: ['"bye"'], object: "id#df_d93eb2bf" },
    "id#ln_c554664d": { args: ['r"repeat"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_c6254c8e": { args: ["0.1"], object: "id#df_f69ffc34" },
    "id#ln_c8d83e51": { args: ['r"talk about"'], object: "id#df_d53d93a5" },
    "id#ln_ca538671": { args: ['r"bye"'], object: "id#df_d53d93a5" },
    "id#ln_d10eb894": { object: "id#df_f02b24b1" },
    "id#ln_d608417b": { args: ['r"\\b(hi|hello)\\b"', "id#df_a5e0bc93"], object: "id#df_d53d93a5" },
    "id#ln_dc849a11": { object: "id#df_f02b24b1" },
    "id#ln_dd69a6e4": { object: "id#df_f02b24b1" },
    "id#ln_eca34c39": { object: "id#df_f02b24b1" },
    "id#ln_ed4e36b1": { object: "id#df_f69ffc34" },
    "id#ln_f66959fb": { args: ['r"repeat"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_f6702368": { args: ['r"hi|hello"', "id#df_7c66f21d"], object: "id#df_d53d93a5" },
    "id#ln_fcbfc5ea": { object: "id#df_a422120f" },
  },
  miscs: {
    "id#ms_4a56962c": { items: { var3: "info_of_step_1" } },
    "id#ms_e34cffe0": { items: { var1: "global_data", var2: "global_data", var3: "global_data" } },
  },
  nodes: {
    "id#nd_45f6a00c": {
      misc: "id#ms_e34cffe0",
      processing: "id#pr_6d80a300",
      response: "id#rs_b3f8ae27",
      transitions: [
        "id#tr_6b35a375",
        "id#tr_d57b795d",
        "id#tr_651b7adf",
        "id#tr_0e73666b",
        "id#tr_92b0c3e4",
      ],
      type: "global",
    },
    "id#nd_5cc9ff2e": {
      name: "node2",
      response: "id#rs_da1cf52b",
      transitions: ["id#tr_bb475cf8", "id#tr_d442674e", "id#tr_859e8bc5", "id#tr_b7325043"],
      type: "regular",
    },
    "id#nd_7f204f54": {
      name: "node4",
      response: "id#rs_195cecfb",
      transitions: ["id#tr_b7daa189", "id#tr_69f211fa", "id#tr_30131d3f"],
      type: "regular",
    },
    "id#nd_81f4d274": {
      name: "node3",
      response: "id#rs_15602dde",
      transitions: ["id#tr_18695f27", "id#tr_1c22547b", "id#tr_2876274f", "id#tr_fe819395"],
      type: "regular",
    },
    "id#nd_8f66551d": { processing: "id#pr_3534f05e", type: "local" },
    "id#nd_96446549": {
      name: "node3",
      response: "id#rs_ddc7f7a7",
      transitions: ["id#tr_5f470ba0"],
      type: "regular",
    },
    "id#nd_a8567873": {
      name: "node4",
      response: "id#rs_d3c6ff89",
      transitions: ["id#tr_0bbb81fa", "id#tr_8009411b"],
      type: "regular",
    },
    "id#nd_bef82d7b": {
      name: "node2",
      response: "id#rs_f8d20493",
      transitions: ["id#tr_09b9b802", "id#tr_08731524", "id#tr_336f8d6b"],
      type: "regular",
    },
    "id#nd_d986c521": {
      name: "node1",
      response: "id#rs_6ec70555",
      transitions: ["id#tr_99cc68a4", "id#tr_45c94617"],
      type: "regular",
    },
    "id#nd_e17029d5": {
      name: "fallback_node",
      response: "id#rs_2491b260",
      transitions: ["id#tr_0820597f", "id#tr_c18e8f8f", "id#tr_2bf19ddf", "id#tr_a5fa61d2"],
      type: "regular",
    },
    "id#nd_e273992f": {
      name: "start_node",
      response: "id#rs_fc45ef7f",
      transitions: ["id#tr_ae9a7d1c", "id#tr_f5894899", "id#tr_d6b5a140"],
      type: "regular",
    },
    "id#nd_fb1d30cf": {
      misc: "id#ms_4a56962c",
      name: "node1",
      response: "id#rs_cddf07d7",
      transitions: ["id#tr_70d074f0", "id#tr_b3e833e7"],
      type: "regular",
    },
  },
  plots: {
    "id#pl_9ebabe99": {
      flows: ["id#fl_b58ab8f4", "id#fl_af394d02", "id#fl_cb75203f"],
      name: "plot",
    },
  },
  processings: {
    "id#pr_3534f05e": { items: [{ "2": "id#ln_40ca58bc" }, { "3": "id#ln_84d0157d" }] },
    "id#pr_6d80a300": { items: [{ "1": "id#ln_5bf91c95" }, { "2": "id#ln_b82cd602" }] },
  },
  py_defs: {
    "id#df_10998fcb": { name: "lbl.forward" },
    "id#df_258094b8": {
      code: '\n\ndef add_prefix(prefix):\n    def add_prefix_processing(ctx: Context, actor: Actor, *args, **kwargs) -> Context:\n        processed_node = ctx.a_s.get("processed_node", ctx.a_s["next_node"])\n        processed_node.response = f"{prefix}: {processed_node.response}"\n        ctx.a_s["processed_node"] = processed_node\n        return ctx\n\n    return add_prefix_processing\n',
      name: "add_prefix",
    },
    "id#df_27f82e0e": { name: "cnd.negation" },
    "id#df_5c138e3b": {
      code: '\n\n# NodeLabel3Type == tuple[str, str, float]\ndef greeting_flow_n2_transition(ctx: Context, actor: Actor, *args, **kwargs) -> NodeLabel3Type:\n    return ("greeting_flow", "node2", 1.0)\n',
      name: "greeting_flow_n2_transition",
    },
    "id#df_7c66f21d": { name: "re.IGNORECASE" },
    "id#df_91cfb554": { name: "cnd.has_last_labels" },
    "id#df_95f6604e": { name: "rsp.choice" },
    "id#df_a422120f": { name: "lbl.backward" },
    "id#df_a5e0bc93": { name: "re.I" },
    "id#df_abae8c8a": {
      code: "def transition(ctx: Context, actor: Actor, *args, **kwargs) -> NodeLabel3Type:\n    return (flow_label, label, 2.0)\n",
      name: "transition",
    },
    "id#df_bd2cda2f": {
      code: "\n\ndef high_priority_node_transition(flow_label, label):\n    def transition(ctx: Context, actor: Actor, *args, **kwargs) -> NodeLabel3Type:\n        return (flow_label, label, 2.0)\n\n    return transition\n",
      name: "high_priority_node_transition",
    },
    "id#df_c9ff04d9": {
      code: "# wrapper for internal response function\ndef cannot_talk_about_topic_response(ctx: Context, actor: Actor, *args, **kwargs) -> Any:\n    return response.upper()\n",
      name: "cannot_talk_about_topic_response",
    },
    "id#df_ccc09ba2": {
      code: 'def add_prefix_processing(ctx: Context, actor: Actor, *args, **kwargs) -> Context:\n    processed_node = ctx.a_s.get("processed_node", ctx.a_s["next_node"])\n    processed_node.response = f"{prefix}: {processed_node.response}"\n    ctx.a_s["processed_node"] = processed_node\n    return ctx\n',
      name: "add_prefix_processing",
    },
    "id#df_ce293ba3": { name: "lbl.previous" },
    "id#df_d53d93a5": { name: "cnd.regexp" },
    "id#df_d93eb2bf": {
      code: "\n\ndef upper_case_response(response: str):\n    # wrapper for internal response function\n    def cannot_talk_about_topic_response(ctx: Context, actor: Actor, *args, **kwargs) -> Any:\n        return response.upper()\n\n    return cannot_talk_about_topic_response\n",
      name: "upper_case_response",
    },
    "id#df_f02b24b1": { name: "cnd.true" },
    "id#df_f4fc882f": { name: "cnd.all" },
    "id#df_f69ffc34": { name: "lbl.to_fallback" },
    "id#df_f90d064f": { name: "lbl.repeat" },
  },
  responses: {
    "id#rs_15602dde": {
      response_object:
        '"The band achieved commercial success with the release of five studio albums."',
    },
    "id#rs_195cecfb": { response_object: '"That\'s all what I know"' },
    "id#rs_2491b260": { response_object: '"Ooops"' },
    "id#rs_6ec70555": {
      response_object: '"I love `System of a Down` group, would you like to tell about it? "',
    },
    "id#rs_b3f8ae27": { response_object: '""' },
    "id#rs_cddf07d7": { response_object: "id#ln_5b21aeff" },
    "id#rs_d3c6ff89": { response_object: "id#ln_c391b856" },
    "id#rs_da1cf52b": { response_object: '"Good. What do you want to talk about?"' },
    "id#rs_ddc7f7a7": { response_object: "id#ln_02f3e12c" },
    "id#rs_f8d20493": {
      response_object:
        '"System of a Downis an Armenian-American heavy metal band formed in in 1994."',
    },
    "id#rs_fc45ef7f": { response_object: '""' },
  },
  transitions: {
    "id#tr_0820597f": { condition: "id#ln_7d2ccd6b", label: "id#nd_d986c521" },
    "id#tr_08731524": { condition: "id#ln_c554664d", label: "id#ln_012780c6" },
    "id#tr_09b9b802": { condition: "id#ln_2f403b88", label: "id#ln_6b204b87" },
    "id#tr_0bbb81fa": { condition: "id#ln_3cbd8900", label: "id#nd_fb1d30cf" },
    "id#tr_0e73666b": { condition: "id#ln_67e313ad", label: "id#ln_7d43bf50" },
    "id#tr_18695f27": { condition: "id#ln_34e9b98d", label: "id#ln_38b11745" },
    "id#tr_1c22547b": { condition: "id#ln_0e8a39d3", label: "id#ln_fcbfc5ea" },
    "id#tr_2876274f": { condition: "id#ln_f66959fb", label: "id#ln_028f11d1" },
    "id#tr_2bf19ddf": { condition: "id#ln_3f60e4f2", label: "id#ln_1a92c5fc" },
    "id#tr_30131d3f": { condition: "id#ln_3cde4531", label: "id#ln_220e751f" },
    "id#tr_336f8d6b": { condition: "id#ln_dd69a6e4", label: "id#ln_65654a9a" },
    "id#tr_45c94617": { condition: "id#ln_eca34c39", label: "id#ln_ed4e36b1" },
    "id#tr_5f470ba0": { condition: "id#ln_ca538671", label: "id#ln_ac1b124d" },
    "id#tr_651b7adf": { condition: "id#ln_194c2279", label: "id#ln_a2b48377" },
    "id#tr_69f211fa": { condition: "id#ln_72b3b3f7", label: "id#ln_8000208a" },
    "id#tr_6b35a375": { condition: "id#ln_d608417b", label: "id#nd_fb1d30cf", priority: 1.1 },
    "id#tr_70d074f0": { condition: "id#ln_5794f138", label: "id#nd_e17029d5", priority: 0.1 },
    "id#tr_8009411b": { condition: "id#ln_89a5267f", label: "id#ln_1ddb4d76" },
    "id#tr_859e8bc5": { condition: "id#ln_7768c38a", label: "id#nd_d986c521" },
    "id#tr_92b0c3e4": { condition: "id#ln_38f824e1", label: "id#ln_362f6aff" },
    "id#tr_99cc68a4": { condition: "id#ln_81b8c9a3", label: "id#ln_1b8af782" },
    "id#tr_a5fa61d2": { condition: "id#ln_dc849a11", label: "id#ln_2b9ad1df" },
    "id#tr_ae9a7d1c": { condition: "id#ln_08c95fe3", label: "id#nd_d986c521" },
    "id#tr_b3e833e7": { condition: "id#ln_0b63b760", label: "id#nd_5cc9ff2e" },
    "id#tr_b7325043": { condition: "id#ln_406cc777", label: "id#ln_59ff1f41" },
    "id#tr_b7daa189": { condition: "id#ln_35393354", label: "id#ln_974ac083" },
    "id#tr_bb475cf8": { condition: "id#ln_b5fbf2d5", label: "id#ln_c6254c8e" },
    "id#tr_c18e8f8f": { condition: "id#ln_f6702368", label: "id#nd_fb1d30cf" },
    "id#tr_d442674e": { condition: "id#ln_c8d83e51", label: "id#ln_03f6bc97" },
    "id#tr_d57b795d": { condition: "id#ln_82b4339f", label: "id#nd_d986c521", priority: 1.1 },
    "id#tr_d6b5a140": { condition: "id#ln_7ff88591", label: "id#nd_e17029d5" },
    "id#tr_f5894899": { condition: "id#ln_9d560799", label: "id#nd_fb1d30cf" },
    "id#tr_fe819395": { condition: "id#ln_d10eb894", label: "id#ln_75c30025" },
  },
};